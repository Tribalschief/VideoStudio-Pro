"use client";
import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Img,
  useVideoConfig,
  Audio,
  useCurrentFrame,
  interpolate,
} from "remotion";
import { useVideo } from "@/context/video";
interface Caption {
  start: number;
  end: number;
  text: string;
}

interface RemotionVideoProps {
  images: string[];
  audio: string;
  captions: Caption[];
}
export default function RemotionVideo({
  images = [],
  audio = "",
  captions = [],
}: RemotionVideoProps) {
  const {
    images: videoImages,
    audio: videoAudio,
    captions: videoCaptions,
  } = useVideo();
  const unsed = videoImages + videoAudio + videoCaptions;
  
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  try {
    return
  } catch (error) {
    console.log(error,unsed)
  }
  const totalDuration =
    captions.length > 0
      ? Math.ceil((captions[captions.length - 1] as Caption).end / (1000 / 30)) + 30
      : 1; // add 30 frames for an additional seconds

  const getCurrentCaptions = () => {
    const currentTime = (frame / fps) * 1000;
    const currentCaption = captions.find(
      (caption: Caption) =>
        currentTime >= caption.start && currentTime <= caption.end
    );
    return currentCaption ? (currentCaption).text : "";
  };

  const calculateOpacity = (
    index: number,
    frame: number,
    startFrame: number,
    endFrame: number
  ) => {
    if (startFrame >= endFrame) {
      return 1; // default opacity
    }

    const inputRange = [startFrame, startFrame + 50, endFrame - 50, endFrame];

    const uniqueInputRange = Array.from(new Set(inputRange)).sort(
      (a, b) => a - b
    );

    return index === 0 ? 1 : interpolate(frame, uniqueInputRange, [0, 1, 1, 0]);
  };

  const calculateScale = (
    frame: number,
    startFrame: number,
    totalDuration: number
  ): number => {
    return interpolate(
      frame,
      [startFrame, startFrame + totalDuration],
      [1, 1.5],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      }
    );
  };

  return (
    <AbsoluteFill>
      {images.map((image: string, index: number) => {
        // calculate the start and end frames for this image
        const startFrame = (index * totalDuration) / images.length;
        const endFrame = startFrame + totalDuration;

        const opacity = calculateOpacity(index, frame, startFrame, endFrame);
        const scale = calculateScale(frame, startFrame, totalDuration);

        // calculate the opacity for the fade-in effect
        // const opacity =
        //   index === 0
        //     ? 1
        //     : interpolate(
        //         frame,
        //         [startFrame, startFrame + 50, endFrame - 50, endFrame],
        //         [0, 1, 1, 0]
        //       );

        // const calculateScale = interpolate(
        //   frame,
        //   [startFrame, startFrame + totalDuration / 2, endFrame],
        //   [1, 1.8, 1],
        //   {
        //     extrapolateLeft: "clamp",
        //     extrapolateRight: "clamp",
        //   }
        // );

        return (
          <Sequence
            key={index}
            from={(index * totalDuration) / images.length}
            durationInFrames={totalDuration}
          >
            <Img
              src={image}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                margin: "auto",
                opacity,
                // transform: `scale(${calculateScale})`,
                transform: `scale(${scale})`,
              }}
            />

            <AbsoluteFill
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <h2 className="text-4xl text-white text-center">
                {getCurrentCaptions()}
              </h2>
            </AbsoluteFill>
          </Sequence>
        );
      })}
      <Audio src={audio} />
    </AbsoluteFill>
  );
}
