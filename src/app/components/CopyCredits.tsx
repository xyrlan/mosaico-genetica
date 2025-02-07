import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const CopyCredits = () => {
  return (
    <>
      <div className="my-12 opacity-20 h-0.5 bg-gray-400 w-full " />

      <motion.div
        className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        <p className="mb-4 md:mb-0 hover:text-primary/80 transition-colors cursor-default">
          &copy; 2024. Mosaico genética médica. Todos os direitos reservados.
        </p>
        <motion.p
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          Designed & Developed with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            className="text-secondary"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.span>{" "}
          by{" "}
          <Link
            className="text-secondary hover:text-secondary-600 transition-colors underline-offset-4 hover:underline"
            href="https://xyrlan-marketing.vercel.app/"
            target="_blank"
          >
            xyrlan
          </Link>
        </motion.p>
      </motion.div>
    </>
  )
}

export default CopyCredits