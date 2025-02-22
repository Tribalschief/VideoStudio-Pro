"use client"

import { useEffect, useRef } from "react"
import { FaPlay, FaRocket, FaSatellite, FaGlobe } from "react-icons/fa"
import { GiArtificialIntelligence, GiStarfighter } from "react-icons/gi"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current

    gsap.fromTo(
      section,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      },
    )

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        },
      )
    })
  }, [])

  const features = [
    {
      icon: GiArtificialIntelligence,
      title: "AI Nebula Editor",
      description: "Harness the power of cosmic AI to enhance your videos with otherworldly effects.",
    },
    {
      icon: FaRocket,
      title: "Lightspeed Publishing",
      description: "Launch your creations into the social media universe at the speed of light.",
    },
    {
      icon: FaSatellite,
      title: "Galactic Preview",
      description: "Observe your edits in real-time across multiple dimensions of your project.",
    },
    {
      icon: GiStarfighter,
      title: "Stellar Transitions",
      description: "Navigate between scenes with the grace of a comet streaking across the night sky.",
    },
    {
      icon: FaGlobe,
      title: "Universal Compatibility",
      description: "Your masterpieces will play flawlessly on devices across the known universe.",
    },
    {
      icon: FaPlay,
      title: "Quantum Playback",
      description: "Experience your videos in multiple timelines simultaneously with our quantum viewer.",
    },
  ]

  return (
    <main ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 to-gray-800" id="features">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Cosmic Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {cardsRef.current[index] = el as HTMLDivElement}}
              className="feature-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-purple-500 mb-4">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Features

