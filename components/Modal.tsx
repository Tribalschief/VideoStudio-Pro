"use client"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useVideo } from "@/context/video"
import Image from "next/image"

export default function LoadingModal() {
  const { loading, loadingMessage } = useVideo()

  return (
    <AnimatePresence>
      {loading && (
        <Dialog open={loading}>
          <DialogContent className="sm:max-w-[425px] w-full bg-gray-900/90 border-none rounded-2xl p-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center p-6"
            >
              <div className="relative w-64 h-64 mb-6">
                <Image src="/loading.gif" alt="Loading..." layout="fill" objectFit="cover" className="rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-2xl" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  {loadingMessage}
                </h2>
                <p className="text-gray-400">Please wait while we process your request</p>
              </motion.div>

              <motion.div
                className="mt-6 flex justify-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 bg-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

