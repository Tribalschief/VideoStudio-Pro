"use server";
import { nanoid } from "nanoid";
import {cloudinary} from "@/lib/cloudinary";

export async function generateAudio(text: string) {
  console.log(process.env.PLAYHT_API_KEY)
  console.log(process.env.PLAYHT_USER_ID)
  try {
    const response = await fetch("https://play.ht/api/v2/tts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.PLAYHT_API_KEY}`,
        "X-User-Id": process.env.PLAYHT_USER_ID!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        voice: "Adolfo", // Use a valid PlayHT voice from your list
        text,
      }),
    });

    if (!response.ok) {
      throw new Error(`PlayHT request failed: ${response.statusText}`);
    }

    // Read the SSE stream from PlayHT
    const reader = response.body?.getReader();
    let resultText = "";

    while (reader) {
      const { done, value } = await reader.read();
      if (done) break;
      resultText += new TextDecoder().decode(value);
    }

    // Extract the final audio URL from the streamed response
    const match = resultText.match(/"url":"(https:\/\/[^"]+)"/);
    if (!match) {
      throw new Error("Failed to extract audio URL from PlayHT response");
    }

    const audioUrl = match[1].replace(/\\/g, ""); // Fix escaped characters
    console.log("Generated Audio URL:", audioUrl);

    // Fetch the MP3 file from PlayHT
    const audioResponse = await fetch(audioUrl);
    const audioBuffer = await audioResponse.arrayBuffer();

    if (!audioBuffer) {
      throw new Error("Failed to download audio from PlayHT");
    }

    // Generate a unique filename
    const fileName = nanoid(6);

    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "video", // Cloudinary treats MP3s as videos
          public_id: fileName,
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            return reject(new Error("Upload to Cloudinary failed"));
          }
          if (result) {
            console.log("Audio uploaded to Cloudinary:", result.secure_url);
            resolve({ url: result.secure_url });
          } else {
            reject(new Error("No result returned from Cloudinary upload"));
          }
        }
      );

      // Stream audio buffer to Cloudinary
      uploadStream.end(Buffer.from(audioBuffer));
    });
  } catch (error) {
    console.error("Error in generateAudio:", error);
    throw new Error("Audio generation failed");
  }
}
