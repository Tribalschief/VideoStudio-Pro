'use server';
import { AssemblyAI } from 'assemblyai';

const client = new AssemblyAI({
    apiKey: "01f9000ed171479da30f4f2883c727df",
})

// const captionArray = [
//     {
//         "text": "The",
//         "start": 80,
//         "end": 192,
//         "confidence": 0.99223,
//         "speaker": null
//     },
//     {
//         "text": "wind",
//         "start": 192,
//         "end": 376,
//         "confidence": 0.99984,
//         "speaker": null
//     },
//     {
//         "text": "whipped",
//         "start": 400,
//         "end": 648,
//         "confidence": 0.99807,
//         "speaker": null
//     },
//     {
//         "text": "at",
//         "start": 664,
//         "end": 744,
//         "confidence": 0.99159,
//         "speaker": null
//     },
//     {
//         "text": "Elara's",
//         "start": 752,
//         "end": 1368,
//         "confidence": 0.93693,
//         "speaker": null
//     },
//     {
//         "text": "cloak,",
//         "start": 1384,
//         "end": 1720,
//         "confidence": 0.99643,
//         "speaker": null
//     },
//     {
//         "text": "carrying",
//         "start": 1800,
//         "end": 2136,
//         "confidence": 0.88037,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 2168,
//         "end": 2312,
//         "confidence": 0.99948,
//         "speaker": null
//     },
//     {
//         "text": "scent",
//         "start": 2336,
//         "end": 2536,
//         "confidence": 0.99942,
//         "speaker": null
//     },
//     {
//         "text": "of",
//         "start": 2568,
//         "end": 2712,
//         "confidence": 0.99988,
//         "speaker": null
//     },
//     {
//         "text": "pine",
//         "start": 2736,
//         "end": 2984,
//         "confidence": 0.99765,
//         "speaker": null
//     },
//     {
//         "text": "and",
//         "start": 3032,
//         "end": 3192,
//         "confidence": 0.99844,
//         "speaker": null
//     },
//     {
//         "text": "magic.",
//         "start": 3216,
//         "end": 3688,
//         "confidence": 0.99848,
//         "speaker": null
//     },
//     {
//         "text": "Below,",
//         "start": 3784,
//         "end": 4136,
//         "confidence": 0.99992,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 4208,
//         "end": 4392,
//         "confidence": 0.99979,
//         "speaker": null
//     },
//     {
//         "text": "Whispering",
//         "start": 4416,
//         "end": 4904,
//         "confidence": 0.99902,
//         "speaker": null
//     },
//     {
//         "text": "woods",
//         "start": 4952,
//         "end": 5352,
//         "confidence": 0.99823,
//         "speaker": null
//     },
//     {
//         "text": "stretched",
//         "start": 5416,
//         "end": 5816,
//         "confidence": 0.89603,
//         "speaker": null
//     },
//     {
//         "text": "out",
//         "start": 5848,
//         "end": 5992,
//         "confidence": 0.9992,
//         "speaker": null
//     },
//     {
//         "text": "like",
//         "start": 6016,
//         "end": 6152,
//         "confidence": 0.99966,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 6176,
//         "end": 6312,
//         "confidence": 0.99909,
//         "speaker": null
//     },
//     {
//         "text": "tapestry",
//         "start": 6336,
//         "end": 6776,
//         "confidence": 0.99989,
//         "speaker": null
//     },
//     {
//         "text": "of",
//         "start": 6808,
//         "end": 6952,
//         "confidence": 0.99989,
//         "speaker": null
//     },
//     {
//         "text": "emerald",
//         "start": 6976,
//         "end": 7288,
//         "confidence": 0.99862,
//         "speaker": null
//     },
//     {
//         "text": "and",
//         "start": 7304,
//         "end": 7432,
//         "confidence": 0.99971,
//         "speaker": null
//     },
//     {
//         "text": "gold,",
//         "start": 7456,
//         "end": 7880,
//         "confidence": 0.98535,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 8000,
//         "end": 8232,
//         "confidence": 0.97365,
//         "speaker": null
//     },
//     {
//         "text": "place",
//         "start": 8256,
//         "end": 8392,
//         "confidence": 0.99977,
//         "speaker": null
//     },
//     {
//         "text": "of",
//         "start": 8416,
//         "end": 8552,
//         "confidence": 0.99967,
//         "speaker": null
//     },
//     {
//         "text": "ancient",
//         "start": 8576,
//         "end": 8904,
//         "confidence": 0.99966,
//         "speaker": null
//     },
//     {
//         "text": "secrets",
//         "start": 8952,
//         "end": 9288,
//         "confidence": 0.99966,
//         "speaker": null
//     },
//     {
//         "text": "and",
//         "start": 9304,
//         "end": 9480,
//         "confidence": 0.99987,
//         "speaker": null
//     },
//     {
//         "text": "whispered",
//         "start": 9520,
//         "end": 9896,
//         "confidence": 0.91432,
//         "speaker": null
//     },
//     {
//         "text": "dangers.",
//         "start": 9928,
//         "end": 10488,
//         "confidence": 0.99739,
//         "speaker": null
//     },
//     {
//         "text": "She",
//         "start": 10584,
//         "end": 10792,
//         "confidence": 0.99943,
//         "speaker": null
//     },
//     {
//         "text": "opened",
//         "start": 10816,
//         "end": 11096,
//         "confidence": 0.9995,
//         "speaker": null
//     },
//     {
//         "text": "her",
//         "start": 11128,
//         "end": 11272,
//         "confidence": 0.54475,
//         "speaker": null
//     },
//     {
//         "text": "journal,",
//         "start": 11296,
//         "end": 11672,
//         "confidence": 0.99669,
//         "speaker": null
//     },
//     {
//         "text": "its",
//         "start": 11776,
//         "end": 11992,
//         "confidence": 0.99205,
//         "speaker": null
//     },
//     {
//         "text": "pages",
//         "start": 12016,
//         "end": 12264,
//         "confidence": 0.99946,
//         "speaker": null
//     },
//     {
//         "text": "filled",
//         "start": 12312,
//         "end": 12536,
//         "confidence": 0.98175,
//         "speaker": null
//     },
//     {
//         "text": "with",
//         "start": 12568,
//         "end": 12712,
//         "confidence": 0.99931,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 12736,
//         "end": 12824,
//         "confidence": 0.97039,
//         "speaker": null
//     },
//     {
//         "text": "scribbles",
//         "start": 12832,
//         "end": 13256,
//         "confidence": 0.99657,
//         "speaker": null
//     },
//     {
//         "text": "of",
//         "start": 13288,
//         "end": 13384,
//         "confidence": 0.99956,
//         "speaker": null
//     },
//     {
//         "text": "her",
//         "start": 13392,
//         "end": 13512,
//         "confidence": 0.99838,
//         "speaker": null
//     },
//     {
//         "text": "travels.",
//         "start": 13536,
//         "end": 13960,
//         "confidence": 0.99043,
//         "speaker": null
//     },
//     {
//         "text": "The",
//         "start": 14040,
//         "end": 14232,
//         "confidence": 0.99537,
//         "speaker": null
//     },
//     {
//         "text": "map",
//         "start": 14256,
//         "end": 14456,
//         "confidence": 0.99853,
//         "speaker": null
//     },
//     {
//         "text": "she'd",
//         "start": 14488,
//         "end": 14728,
//         "confidence": 0.98962,
//         "speaker": null
//     },
//     {
//         "text": "been",
//         "start": 14744,
//         "end": 14872,
//         "confidence": 0.99956,
//         "speaker": null
//     },
//     {
//         "text": "given",
//         "start": 14896,
//         "end": 15128,
//         "confidence": 0.9977,
//         "speaker": null
//     },
//     {
//         "text": "pointed",
//         "start": 15184,
//         "end": 15448,
//         "confidence": 0.99245,
//         "speaker": null
//     },
//     {
//         "text": "to",
//         "start": 15464,
//         "end": 15544,
//         "confidence": 0.99939,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 15552,
//         "end": 15624,
//         "confidence": 0.99901,
//         "speaker": null
//     },
//     {
//         "text": "hidden",
//         "start": 15632,
//         "end": 15912,
//         "confidence": 0.99989,
//         "speaker": null
//     },
//     {
//         "text": "temple",
//         "start": 15976,
//         "end": 16344,
//         "confidence": 0.99931,
//         "speaker": null
//     },
//     {
//         "text": "within",
//         "start": 16392,
//         "end": 16648,
//         "confidence": 0.99791,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 16704,
//         "end": 16824,
//         "confidence": 0.9995,
//         "speaker": null
//     },
//     {
//         "text": "woods,",
//         "start": 16832,
//         "end": 17144,
//         "confidence": 0.99829,
//         "speaker": null
//     },
//     {
//         "text": "rumored",
//         "start": 17192,
//         "end": 17624,
//         "confidence": 0.99066,
//         "speaker": null
//     },
//     {
//         "text": "to",
//         "start": 17672,
//         "end": 17832,
//         "confidence": 0.99946,
//         "speaker": null
//     },
//     {
//         "text": "hold",
//         "start": 17856,
//         "end": 18040,
//         "confidence": 0.99992,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 18080,
//         "end": 18184,
//         "confidence": 0.99856,
//         "speaker": null
//     },
//     {
//         "text": "key",
//         "start": 18192,
//         "end": 18312,
//         "confidence": 0.99993,
//         "speaker": null
//     },
//     {
//         "text": "to",
//         "start": 18336,
//         "end": 18472,
//         "confidence": 0.99922,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 18496,
//         "end": 18632,
//         "confidence": 0.94591,
//         "speaker": null
//     },
//     {
//         "text": "lost",
//         "start": 18656,
//         "end": 18888,
//         "confidence": 0.99156,
//         "speaker": null
//     },
//     {
//         "text": "power.",
//         "start": 18944,
//         "end": 19400,
//         "confidence": 0.99977,
//         "speaker": null
//     },
//     {
//         "text": "With",
//         "start": 19520,
//         "end": 19752,
//         "confidence": 0.99943,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 19776,
//         "end": 19864,
//         "confidence": 0.99976,
//         "speaker": null
//     },
//     {
//         "text": "deep",
//         "start": 19872,
//         "end": 20008,
//         "confidence": 0.99972,
//         "speaker": null
//     },
//     {
//         "text": "breath,",
//         "start": 20024,
//         "end": 20216,
//         "confidence": 0.99988,
//         "speaker": null
//     },
//     {
//         "text": "Elara",
//         "start": 20248,
//         "end": 20776,
//         "confidence": 0.98542,
//         "speaker": null
//     },
//     {
//         "text": "stepped",
//         "start": 20808,
//         "end": 20968,
//         "confidence": 0.99981,
//         "speaker": null
//     },
//     {
//         "text": "into",
//         "start": 20984,
//         "end": 21112,
//         "confidence": 0.99888,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 21136,
//         "end": 21272,
//         "confidence": 0.99959,
//         "speaker": null
//     },
//     {
//         "text": "forest.",
//         "start": 21296,
//         "end": 21768,
//         "confidence": 0.99674,
//         "speaker": null
//     },
//     {
//         "text": "The",
//         "start": 21864,
//         "end": 22072,
//         "confidence": 0.9991,
//         "speaker": null
//     },
//     {
//         "text": "air",
//         "start": 22096,
//         "end": 22280,
//         "confidence": 0.99978,
//         "speaker": null
//     },
//     {
//         "text": "grew",
//         "start": 22320,
//         "end": 22584,
//         "confidence": 0.99878,
//         "speaker": null
//     },
//     {
//         "text": "heavy",
//         "start": 22632,
//         "end": 22984,
//         "confidence": 0.99939,
//         "speaker": null
//     },
//     {
//         "text": "with",
//         "start": 23032,
//         "end": 23192,
//         "confidence": 0.99643,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 23216,
//         "end": 23352,
//         "confidence": 0.9954,
//         "speaker": null
//     },
//     {
//         "text": "scent",
//         "start": 23376,
//         "end": 23528,
//         "confidence": 0.99962,
//         "speaker": null
//     },
//     {
//         "text": "of",
//         "start": 23544,
//         "end": 23672,
//         "confidence": 0.99958,
//         "speaker": null
//     },
//     {
//         "text": "damp",
//         "start": 23696,
//         "end": 23944,
//         "confidence": 0.99977,
//         "speaker": null
//     },
//     {
//         "text": "earth",
//         "start": 23992,
//         "end": 24216,
//         "confidence": 0.99986,
//         "speaker": null
//     },
//     {
//         "text": "and",
//         "start": 24248,
//         "end": 24344,
//         "confidence": 0.99725,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 24352,
//         "end": 24472,
//         "confidence": 0.98402,
//         "speaker": null
//     },
//     {
//         "text": "faint",
//         "start": 24496,
//         "end": 24840,
//         "confidence": 0.9945,
//         "speaker": null
//     },
//     {
//         "text": "metallic",
//         "start": 24920,
//         "end": 25416,
//         "confidence": 0.99411,
//         "speaker": null
//     },
//     {
//         "text": "tang",
//         "start": 25448,
//         "end": 25656,
//         "confidence": 0.99321,
//         "speaker": null
//     },
//     {
//         "text": "of",
//         "start": 25688,
//         "end": 25784,
//         "confidence": 0.99644,
//         "speaker": null
//     },
//     {
//         "text": "magic.",
//         "start": 25792,
//         "end": 26152,
//         "confidence": 0.99125,
//         "speaker": null
//     },
//     {
//         "text": "A",
//         "start": 26216,
//         "end": 26344,
//         "confidence": 0.99089,
//         "speaker": null
//     },
//     {
//         "text": "sudden",
//         "start": 26352,
//         "end": 26568,
//         "confidence": 0.99947,
//         "speaker": null
//     },
//     {
//         "text": "rustle",
//         "start": 26584,
//         "end": 27016,
//         "confidence": 0.51191,
//         "speaker": null
//     },
//     {
//         "text": "in",
//         "start": 27048,
//         "end": 27144,
//         "confidence": 0.99051,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 27152,
//         "end": 27272,
//         "confidence": 0.99817,
//         "speaker": null
//     },
//     {
//         "text": "undergrowth",
//         "start": 27296,
//         "end": 27704,
//         "confidence": 0.81523,
//         "speaker": null
//     },
//     {
//         "text": "made",
//         "start": 27752,
//         "end": 27864,
//         "confidence": 0.99866,
//         "speaker": null
//     },
//     {
//         "text": "her",
//         "start": 27872,
//         "end": 27992,
//         "confidence": 0.99825,
//         "speaker": null
//     },
//     {
//         "text": "jump.",
//         "start": 28016,
//         "end": 28432,
//         "confidence": 0.999,
//         "speaker": null
//     },
//     {
//         "text": "A",
//         "start": 28536,
//         "end": 28752,
//         "confidence": 0.99806,
//         "speaker": null
//     },
//     {
//         "text": "cloaked",
//         "start": 28776,
//         "end": 29136,
//         "confidence": 0.84552,
//         "speaker": null
//     },
//     {
//         "text": "figure",
//         "start": 29168,
//         "end": 29456,
//         "confidence": 0.99981,
//         "speaker": null
//     },
//     {
//         "text": "emerged",
//         "start": 29488,
//         "end": 30032,
//         "confidence": 0.62116,
//         "speaker": null
//     },
//     {
//         "text": "from",
//         "start": 30096,
//         "end": 30272,
//         "confidence": 0.99992,
//         "speaker": null
//     },
//     {
//         "text": "the",
//         "start": 30296,
//         "end": 30432,
//         "confidence": 0.99811,
//         "speaker": null
//     },
//     {
//         "text": "shadows,",
//         "start": 30456,
//         "end": 30912,
//         "confidence": 0.99204,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 30976,
//         "end": 31152,
//         "confidence": 0.99548,
//         "speaker": null
//     },
//     {
//         "text": "staff",
//         "start": 31176,
//         "end": 31456,
//         "confidence": 0.99943,
//         "speaker": null
//     },
//     {
//         "text": "glowing",
//         "start": 31528,
//         "end": 31936,
//         "confidence": 0.57539,
//         "speaker": null
//     },
//     {
//         "text": "in",
//         "start": 31968,
//         "end": 32112,
//         "confidence": 0.99892,
//         "speaker": null
//     },
//     {
//         "text": "their",
//         "start": 32136,
//         "end": 32272,
//         "confidence": 0.98812,
//         "speaker": null
//     },
//     {
//         "text": "hand.",
//         "start": 32296,
//         "end": 32528,
//         "confidence": 0.99924,
//         "speaker": null
//     },
//     {
//         "text": "Alora",
//         "start": 32584,
//         "end": 33088,
//         "confidence": 0.97776,
//         "speaker": null
//     },
//     {
//         "text": "gripped",
//         "start": 33104,
//         "end": 33328,
//         "confidence": 0.99688,
//         "speaker": null
//     },
//     {
//         "text": "her",
//         "start": 33344,
//         "end": 33424,
//         "confidence": 0.99928,
//         "speaker": null
//     },
//     {
//         "text": "sword,",
//         "start": 33432,
//         "end": 33664,
//         "confidence": 0.99984,
//         "speaker": null
//     },
//     {
//         "text": "ready",
//         "start": 33712,
//         "end": 33888,
//         "confidence": 0.99995,
//         "speaker": null
//     },
//     {
//         "text": "for",
//         "start": 33904,
//         "end": 34032,
//         "confidence": 0.9995,
//         "speaker": null
//     },
//     {
//         "text": "a",
//         "start": 34056,
//         "end": 34192,
//         "confidence": 0.9926,
//         "speaker": null
//     },
//     {
//         "text": "fight.",
//         "start": 34216,
//         "end": 34280,
//         "confidence": 0.99836,
//         "speaker": null
//     }
// ]
export async function generateCaptions(audioFileUrl: string) {
    console.log("AssemblyAI API Key:", process.env.ASSEMBLY_API_KEY!); 
  
    try {
    //   Step 1: Submit audio file for transcription
    //   const response = await fetch("https://api.assemblyai.com/v2/transcript", {
    //     method: "POST",
    //     headers: {
    //       authorization: process.env.ASSEMBLY_API_KEY!,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ audio_url: audioFileUrl }),
    //   });
  
    //   const { id: transcriptId } = await response.json();
    //   console.log("Transcript ID:", transcriptId);
  
    //   if (!transcriptId) throw new Error("Failed to get transcript ID");
  
    //   Step 2: Poll AssemblyAI for completion
    //   let transcript;
    //   for (let i = 0; i < 10; i++) { // Try up to 10 times
    //     await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 sec
    //     const transcriptResponse = await fetch(
    //       `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
    //       { headers: { authorization: process.env.ASSEMBLY_API_KEY! } }
    //     );
    //     transcript = await transcriptResponse.json();
  
    //     console.log("Transcript Status:", transcript.status);
  
    //     if (transcript.status === "completed") break;
    //     if (transcript.status === "failed") throw new Error("Transcription failed");
    //   }
  
    //   if (!transcript.words) throw new Error("No words found in transcript");
  
    //   console.log("Transcript words:", transcript.words);
    //   return transcript.words;
    const data = {
        audio_url: audioFileUrl,
    };
    const transcript = await client.transcripts.transcribe(data);
    console.log(transcript.words);
    return transcript.words;
    } catch (err) {
      console.error("Error in generateCaptions:", err);
    }
  }
  