"use client"
import { Player } from "@remotion/player"
import RemotionVideo from "@/components/remotion-video"



export default function DashboardVideoPlayer({ video }) {
  const { images, audioUrl: audio, captions } = video

  // calculate total duration based on captions
  const totalDuration =
    captions.length > 0 ? Math.ceil((captions[captions.length - 1]).end / (1000 / 30)) + 30 : 1 // add 30 frames for an additional second

  return (
    <div className="aspect-w-9 aspect-h-16 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
      <Player
        component={RemotionVideo}
        durationInFrames={totalDuration}
        compositionWidth={300}
        compositionHeight={450}
        fps={30}
        inputProps={{ images, audio, captions }}
        controls={true}
      />
    </div>
  )
}

