
import RemotionVideo from '@/components/remotion-video'
import React from 'react'
import { Composition } from 'remotion'

const RemotionRoot = () => {
  return (
    <>
    <Composition
    id="Empty"
    component={RemotionVideo}
    durationInFrames={60}
    fps={30}
    width={1280}
    height={720}
    />
    </>
  )
}

export default RemotionRoot