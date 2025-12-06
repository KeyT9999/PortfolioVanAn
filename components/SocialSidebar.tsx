'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://fb.com/hiiicris3',
    color: 'hover:text-blue-500',
  },
  {
    name: 'Behance',
    icon: ExternalLink,
    href: 'https://www.behance.net/crison',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/lil.crison/',
    color: 'hover:text-pink-500',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: '#',
    color: 'hover:text-red-500',
  },
]

export default function SocialSidebar() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
      {socialLinks.map((social, index) => {
        const Icon = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, x: -5 }}
            className={`text-white transition-colors ${social.color}`}
            aria-label={social.name}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </div>
  )
}

