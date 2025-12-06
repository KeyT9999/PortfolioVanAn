'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't be shy and
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            talk to me?
          </h2>
          <p className="text-gray-600 text-lg">Say truonghai.work@gmail.com</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.a
            href="mailto:truonghai.work@gmail.com"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-8 border-2 border-gray-200 hover:border-black transition-colors group"
          >
            <div className="w-16 h-16 bg-black flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-sm text-gray-600 text-center">
              truonghai.work@gmail.com
            </p>
          </motion.a>

          <motion.a
            href="https://fb.com/hiiicris3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-8 border-2 border-gray-200 hover:border-black transition-colors group"
          >
            <div className="w-16 h-16 bg-black flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Facebook</h3>
            <p className="text-sm text-gray-600 text-center">fb.com/hiiicris3</p>
          </motion.a>

          <motion.a
            href="tel:+84364605132"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-8 border-2 border-gray-200 hover:border-black transition-colors group"
          >
            <div className="w-16 h-16 bg-black flex items-center justify-center mb-4 group-hover:bg-gray-800 transition-colors">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-sm text-gray-600 text-center">036.460.5132</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

