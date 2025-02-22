"use client";
import { createVideoAi } from "@/action/gemeniai";
import { 
  useState, 
  createContext, 
  useContext, 
  Dispatch, 
  SetStateAction, 
  ReactNode, 
  ChangeEvent, 
} from "react"; 
import { generateImageAi } from "@/action/replicateai";
import { generateAudio } from "@/action/playhtai";
import { generateCaptions } from "@/action/assemblyai";
import { saveVideoToDatabase } from "@/action/mongodb";

// 1 update initial state
const initialState = { 
  script: "script....", 
  images: [] as string[], 
  audio: "", 
  captions: [] as object[], 
  loading: false, 
  selectedStory: "Adventure Story", 
  selectedStyle: "Fantasy", 
};
// const aiVideoScript = [
//   {
//     imagePrompt: 'A lone, weathered adventurer stands on a cliff overlooking a vast, mystical forest, bathed in the golden light of a setting sun. The adventurer is clad in worn leather armor, carrying a sword and a backpack.',
//     contentText: "The wind whipped at Elara's cloak, carrying the scent of pine and magic. Below, the Whispering Woods stretched out like a tapestry of emerald and gold, a place of ancient secrets and whispered dangers."
//   },
//   {
//     imagePrompt: "A close-up of the adventurer's hand, gripping a worn leather-bound journal. The pages are filled with cryptic symbols and sketches of fantastical creatures.",
//     contentText: "She opened her journal, its pages filled with the scribbles of her travels. The map she'd been given pointed to a hidden temple within the woods, rumored to hold the key to a lost power."
//   },
//   {
//     imagePrompt: 'The adventurer cautiously steps into the shadowy depths of the forest. The trees are gnarled and ancient, their branches reaching out like grasping claws. Strange, luminous mushrooms illuminate the path.',
//     contentText: 'With a deep breath, Elara stepped into the forest. The air grew heavy with the scent of damp earth and the faint, metallic tang of magic.'
//   },
//   {
//     imagePrompt: 'A shadowy figure emerges from behind a giant, moss-covered tree. The figure is shrouded in a cloak, holding a glowing staff. The adventurer draws her sword.',
//     contentText: 'A sudden rustle in the undergrowth made her jump. A cloaked figure emerged from the shadows, a staff glowing in their hand. Elara gripped her sword, ready for a fight.'
//   }
// ];
// const aiImages =
//   [
//     "https://res.cloudinary.com/ds1bbydnm/image/upload/v1739891737/ai_video_images/IcUXjDucdNtkmYoxVmaAi.png",
//     "https://res.cloudinary.com/ds1bbydnm/image/upload/v1739891746/ai_video_images/pacDWewj44i_C49ljqj_V.png",
//     "https://res.cloudinary.com/ds1bbydnm/image/upload/v1739891757/ai_video_images/6K-lkR35wRoveDMWIWXtf.png",
//     "https://res.cloudinary.com/ds1bbydnm/image/upload/v1739891767/ai_video_images/sL2LemPh2Wyf74w-Rd1_2.png"
// ]
interface VideoscriptItem {
  imagePrompt: string;
  textContent?: string;
}

// 2 update type 
interface VideoContextType { 
  script: string; 
  images: string[]; 
  audio: string; 
  captions: object[]; 
  loading: boolean; 
  setScript: Dispatch<SetStateAction<string>>; 
  setImages: Dispatch<SetStateAction<string[]>>; 
  setAudio: Dispatch<SetStateAction<string>>; 
  setCaptions: Dispatch<SetStateAction<object[]>>; 
  setLoading: Dispatch<SetStateAction<boolean>>; 
  setLoadingMessage: Dispatch<SetStateAction<string>>;
  loadingMessage: string;
  selectedStory: string; 
  selectedStyle: string; 
  customPrompt: string; 
  handleStorySelect: (story: string) => void; 
  handleStyleSelect: (style: string) => void; 
  handleCustomPromptChange: (e: ChangeEvent<HTMLInputElement>) => void; 
  handleSubmit: () => void; 
}

// create context
const VideoContext = createContext<VideoContextType | undefined>(undefined); 

// create provider component
export const VideoProvider = ({ children }: { children: ReactNode }) => { 
  const [script, setScript] = useState(initialState.script); 
  const [images, setImages] = useState(initialState.images); 
  const [audio, setAudio] = useState(initialState.audio); 
  const [captions, setCaptions] = useState(initialState.captions); 
  const [loading, setLoading] = useState(initialState.loading); 
  const [loadingMessage, setLoadingMessage] = useState(""); 
  const [selectedStory, setSelectedStory] = useState(initialState.selectedStory); 
  const [selectedStyle, setSelectedStyle] = useState(initialState.selectedStyle); 
  const [customPrompt, setCustomPrompt] = useState(""); 

  // 4 functions to handle event change and submit 
  const handleStorySelect = (story: string) => { 
    setSelectedStory(story); 
    if (story !== "Custom Prompt") { 
      setCustomPrompt(""); 
    } 
  }; 

  const handleStyleSelect = (style: string) => { 
    setSelectedStyle(style); 
  }; 

  const handleCustomPromptChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setCustomPrompt(e.target.value); 
    setSelectedStory("Custom Prompt"); 
  }; 

  // const handleSubmit = async () => { 
  //   try { 
  //     setLoading(true); 
  //     setLoadingMessage("Generating video script..."); 

  //     // Step 1: Create video script 
  //     const videoResponse = await createVideoAi( 
  //       `Create a 30 second long ${customPrompt || selectedStory} video script. Include AI image prompts in ${selectedStyle} format for each scene in realistic format. Provide the result in JSON format with 'imagePrompt' and 'contentText' fields.` 
  //     ); 

  //     if (!videoResponse.success) { 
  //       setLoadingMessage("Failed to generate video script"); 
  //       setLoading(false)
  //       setTimeout(() => setLoading(false), 3000); 
        
  //     } 

  //     if(videoResponse.data.length >= 1) {
  //       setLoadingMessage("Generating images...");

  //       const imageGenerationPromises = videoResponse.data.map(async (item: VideoscriptItem) => {
  //         try {
  //           const imageUrl = await generateImageAi(item.imagePrompt);
  //           return imageUrl;
  //         } catch (error) {
  //           console.error(error);
  //           return null;
  //         }
  //       });

  //       const images = await Promise.all(imageGenerationPromises);
  //       const validImages = images.filter((image) => image !== null);

  //       setImages(validImages);

  //       // Step 2: Create video images 
  //       // Step 3: Save Images to Cloudinary 
  //       // Step 4: Convert Script
  //               // Step 4: Convert Script to Speech using Google Cloud 
  //       // Step 5: Save Audio to Cloudinary 
  //       // Step 6: Generate Captions from Audio using Assembly AI 
  //     } 
  //   } catch (error) { 
  //     console.error(error);
  //     setLoadingMessage("An error occurred during the generation process.");
  //   } finally { 
  //     setLoading(false); 
  //     setLoadingMessage("");
  //   } 
  // };

  const handleSubmit = async () => {
    const generateVideoScript = async () => {
      try {
        setLoadingMessage("Generating video script...");
  
        const videoResponse: any = await createVideoAi(
          `Create a 10 second long ${
            customPrompt || selectedStory
          } video script. Include AI imagePrompt for each scene in ${selectedStyle} format. Provide the result in JSON format with 'imagePrompt' and 'textContent' fields. Ensure 'textContent' field has only the story text.`
        );
  
        if (!videoResponse.success) {
          setLoadingMessage("Failed to generate video script");
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          return null;
        }
  
        return videoResponse;
      } catch (err) {
        console.log(err);
        setLoadingMessage("Error generating video script");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
     
    
     const generateImages = async (videoResponse:any) => {
      setLoadingMessage("Generating images...");
      const imageGenerationPromises : Promise<string | null>[] = videoResponse.data.map(
        async (item: VideoscriptItem) => {
        try {
          const imageUrl = await generateImageAi(item.imagePrompt);
          return imageUrl;
        } catch (error) {
          console.error(error);
          return null;
        }
      });
      const images = await Promise.all(imageGenerationPromises);
      const validImages = images.filter((image) => image !== null);
      setImages(validImages);
      return validImages;
    // return new Promise((resolve) => {
    //   setTimeout(()=>{
    //     setImages(aiImages)
    //     resolve(aiImages)
    //   },5000)
    // })
  }
  const generateAudioFile = async (
    videoScript: any
  ): Promise<string | undefined> => {
    setLoading(true);
    setLoadingMessage("Generating audio file ...");

    // console.log("videoScript to generate audio => ", videoScript);

    try {
      const script = videoScript.data
        .map((item: { textContent: string }) => item.textContent)
        .join(" ");

      const data: any = await generateAudio(script);
      // console.log("audio response => ", data);
      setAudio(data.url);
      return data.url;

      // const url =
      //   "https://res.cloudinary.com/dz3j7khia/video/upload/v1731499829/8IYGDS.mp3";
      // setAudio(url);
      // return url;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  
  const generateCaptionsArray = async(audioUrl: string) => {
    setLoadingMessage("Generating captions...");
    try {
      const captionsArray = await generateCaptions(audioUrl);
      if (captionsArray ) {
        setCaptions(captionsArray );
      } else {
        setCaptions([]); // or some other default value
      }
      return captionsArray ;
    } catch (error) {
      console.error("Error generating captions:", error);
      return undefined; // Return undefined in case of error
    } finally {
      setLoading(false);
    }
  }
    try {
      setLoading(true);
        const videoScript = await generateVideoScript();
        const images = await generateImages(videoScript);
        const audioUrl = await generateAudioFile(videoScript);
        // console.log("Generated Audio URL for AssemblyAI:", audioUrl);

        if(!audioUrl) {
          throw new Error("Failed to generate audio file");
        }
        const captions = await generateCaptionsArray(audioUrl!);
        if(videoScript && images && audioUrl && captions) {
          setLoadingMessage("Saving video to database");
          await saveVideoToDatabase({
            videoScript,
            images,
            audioUrl,
            captions
          })
          setLoadingMessage("Video Saved Successfully");
        }
        setLoadingMessage("Video Generated Successfully");
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false);
      
    }

    
  }


  return ( 
    <VideoContext.Provider 
      value={{ 
        script, 
        images, 
        audio, 
        captions, 
        loading, 
        setScript, 
        setImages, 
        setAudio, 
        setCaptions, 
        setLoading, 
        setLoadingMessage,
        loadingMessage,
        selectedStory, 
        selectedStyle, 
        customPrompt, 
        handleStorySelect, 
        handleStyleSelect, 
        handleCustomPromptChange, 
        handleSubmit, 
      }} 
    > 
      {children} 
    </VideoContext.Provider> 
  ); 
}; 

// export useVideo hook
export const useVideo = (): VideoContextType => { 
  const context = useContext(VideoContext); 
  if (context === undefined) { 
    throw new Error("useVideo must be used within a VideoProvider"); 
  } 
  return context; 
};

