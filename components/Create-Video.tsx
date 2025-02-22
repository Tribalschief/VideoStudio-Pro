"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useVideo } from "@/context/video"
import { storyOptions, styleOptions } from "@/constant"
import Image from "next/image"
import { ChevronDown, ChevronUp, Loader2Icon, X } from "lucide-react"
import LoadingModal from "./Modal"
import RemotionPlayer from "./remotion-player"

export default function CreateVideo() {
  const {
    selectedStory,
    selectedStyle,
    customPrompt,
    handleStorySelect,
    handleStyleSelect,
    handleCustomPromptChange,
    handleSubmit,
    loading,
    images,
    audio,
    captions,
  } = useVideo()

  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [isStyleOpen, setIsStyleOpen] = useState(false)

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="order-2 lg:order-1">
      <div className="min-h-screen bg-black text-white p-4 md:p-8 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Craft Your Vision
        </h1>

        {/* Story Selection */}
        <div className="mb-8">
          <motion.button
            onClick={() => setIsStoryOpen(!isStoryOpen)}
            className="w-full bg-gray-900 p-4 rounded-lg flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl font-semibold">{selectedStory || "Select Story Type"}</span>
            {isStoryOpen ? <ChevronUp /> : <ChevronDown />}
          </motion.button>

          <AnimatePresence>
            {isStoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-2 bg-gray-900 rounded-lg overflow-hidden"
              >
                {storyOptions.map((story) => (
                  <motion.div
                    key={story.label}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className="p-3"
                  >
                    {story.type === "custom" ? (
                      <Input
                        type="text"
                        value={customPrompt}
                        onChange={handleCustomPromptChange}
                        placeholder="Enter your prompt"
                        className="w-full bg-gray-800 text-white border-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      <button
                        onClick={() => {
                          handleStorySelect(story.label)
                          setIsStoryOpen(false)
                        }}
                        className="w-full text-left"
                      >
                        {story.label}
                      </button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Style Selection */}
        <div className="mb-12">
          <motion.button
            onClick={() => setIsStyleOpen(!isStyleOpen)}
            className="w-full bg-gray-900 p-4 rounded-lg flex justify-between items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl font-semibold">{selectedStyle || "Select Video Style"}</span>
            {isStyleOpen ? <ChevronUp /> : <ChevronDown />}
          </motion.button>

          <AnimatePresence>
            {isStyleOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {styleOptions.map((style) => (
                  <motion.div
                    key={style.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => {
                      handleStyleSelect(style.name)
                      setIsStyleOpen(false)
                    }}
                  >
                    <Image src={style.image || "/placeholder.svg"} alt={style.name} layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-2">
                      <span className="text-sm font-medium">{style.name}</span>
                    </div>
                    {selectedStyle === style.name && (
                      <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                        <X size={16} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Submit Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={handleSubmit}
            disabled={(!selectedStory && !customPrompt) || !selectedStyle || loading}
            className="w-full h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold rounded-lg 
                       hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
                       disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-500 disabled:hover:to-purple-600"
          >
            {loading && <Loader2Icon size={24} className="mr-2 animate-spin" />} 
Create 
  Video 
          </Button>
          <LoadingModal />
          {/* <pre>{JSON.stringify(images, null, 4)}</pre>
          <pre>{JSON.stringify(audio ,null,4 )}</pre> */}
          {/* <pre>{JSON.stringify(captions, null, 4)}</pre> */}
        </motion.div>
      </motion.div>
    </div>
      </div>
      <div className="flex justify-center items-center vh-100 order-1 lg:order-2">
      {images && audio && captions ? (
        <div className="flex justify-center p-10">     
        <RemotionPlayer/>
     </div>
      ) : (
        <p className="text-center  my-10"> No Video Found</p>
      )}
        
      </div>
    </div>
   
    </>
  )
}

