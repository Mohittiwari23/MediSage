"use client"

import { motion } from "framer-motion"

export function MediSageAnimation() {
  return (
    <div className="relative w-[600px] h-[600px] bg-gradient-to-br from-gray-100 to-white rounded-full">
      {/* Prescription */}
      <motion.div
        className="absolute top-20 left-20 w-48 h-64 bg-white border-2 border-medisage-blue rounded-lg shadow-lg p-6"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-3 bg-medisage-blue/20 mb-4" />
        <div className="w-3/4 h-2 bg-gray-200 mb-3" />
        <div className="w-1/2 h-2 bg-gray-200 mb-6" />
        <span className="text-lg font-semibold text-medisage-blue">Decode</span>
      </motion.div>

      {/* AI Processing */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-medisage-blue rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0 0 rgba(42, 163, 211, 0)",
            "0 0 0 20px rgba(42, 163, 211, 0.1)",
            "0 0 0 0 rgba(42, 163, 211, 0)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <span className="text-xl font-bold text-white">Process</span>
      </motion.div>

      {/* Decoded Information */}
      <motion.div
        className="absolute bottom-20 right-20 w-56 h-72 bg-white border-2 border-medisage-green rounded-lg shadow-lg p-6"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="w-full h-3 bg-medisage-green/20 mb-4" />
        <div className="w-3/4 h-2 bg-gray-200 mb-3" />
        <div className="w-1/2 h-2 bg-gray-200 mb-3" />
        <div className="w-3/4 h-2 bg-gray-200 mb-3" />
        <div className="w-1/2 h-2 bg-gray-200 mb-6" />
        <span className="text-lg font-semibold text-medisage-green">Understand</span>
      </motion.div>

      {/* Floating Keywords */}
      <motion.div
        className="absolute top-10 right-32 text-lg font-semibold text-medisage-blue"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        Accurate
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-lg font-semibold text-medisage-green"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      >
        Safe
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-16 text-lg font-semibold text-medisage-blue"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      >
        Reliable
      </motion.div>
    </div>
  )
}

