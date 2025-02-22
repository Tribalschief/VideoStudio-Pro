"use client"

import { motion } from "framer-motion"
import { Zap, Layers, Cpu, ArrowRight } from "lucide-react"
import Link from "next/link"
interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Create the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Impossible</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-center text-gray-400 mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Harness the power of advanced AI to generate mind-bending content across multiple dimensions.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <FeatureCard
          icon={<Zap className="w-10 h-10 text-yellow-400" />}
          title="Instant Creation"
          description="Generate stunning content in seconds with our lightning-fast AI engines."
        />
        <FeatureCard
          icon={<Layers className="w-10 h-10 text-blue-400" />}
          title="Multi-Dimensional"
          description="Seamlessly blend video, audio, and images into cohesive, immersive experiences."
        />
        <FeatureCard
          icon={<Cpu className="w-10 h-10 text-purple-400" />}
          title="Adaptive AI"
          description="Our AI learns and evolves with every creation, pushing the boundaries of possibility."
        />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
        >
          Start Creating <ArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </main>
  )
}

function FeatureCard({ icon, title, description }:FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

