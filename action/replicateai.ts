"use server";
import Replicate from "replicate";

import { nanoid } from "nanoid";
import fetch from "node-fetch";
import { cloudinary } from "@/lib/cloudinary";  
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});



export async function generateImageAi(imagePrompt: string) {
  try {
    // Step 1: Generate image using Replicate API
    const input = {
      prompt: imagePrompt,
      output_format: "png",
      output_quality: 80,
      aspect_ratio: "1:1",
    };
    const output: any = await replicate.run(
      "bytedance/sdxl-lightning4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
      { input }
    );
    const imageUrl = output[0];

    // Step 2: Fetch the image data from the generated image URL
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Node.js Buffer

    // Step 3: Upload the image to Cloudinary using a buffer
    const uploadResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "ai_video_images", // Folder where the image will be uploaded
          public_id: nanoid(), // Generate a unique ID for the image
        },
        (error, result) => {
          if (error) reject(error); // Reject if there's an error
          else resolve(result); // Resolve the result if successful
        }
      ).end(buffer); // Send the buffer to Cloudinary upload stream
    });

    // Step 4: Return the Cloudinary URL of the uploaded image
    const cloudinaryUrl = uploadResponse.secure_url;
    console.log("Cloudinary image => ", cloudinaryUrl);
    return cloudinaryUrl;
  } catch (err: any) {
    // Handle any errors that occur during the process
    console.error(err);
    throw new Error(err.message);
  }
}