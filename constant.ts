export type StoryOption = { 
    type: "preset" | "custom", 
    label: string, 
    }; 
    export type StyleOption = { 
    name: string, 
    image: string, 
    };

    export const storyOptions: StoryOption[] = [ 
        { 
      type: "preset", label: "Adventure Story" }, 
        {type: "preset", label: "Funny Story" },
        {type: "preset", label: "Scary Story" },
        {type: "preset", label: "Inspirational Story" },
        {type: "preset", label: "Romantic Story" }, 
        {type: "preset", label: "Sci-Fi Story" },
        { type: "preset", label: "Thriller Story" }, 
        { type: "custom", label: "Custom Prompt" },
      ]; 
       
       
       
      
       
      export const styleOptions: StyleOption[] = [ 
        { 
      name: "Artistic", image: "@/public/Artistic.jpg" }, 
        { name: "Realistic", image: "@/public/Realistic.jpg" }, 
        { name: "Fantasy", image: "@/public/fantasy.jpg" },
        { name: "Dark", image: "@/public/dark.jpg" }, 
        { name: "Water color", image: "@/public/waterc.jpg" },
        { name: "GTA", image: "@/public/GTA.jpg" },
        { name: "comic", image: "@/public/comics.jpg" },
        { name: "Paint", image: "@/public/paint.jpg" },
      ]; 
      