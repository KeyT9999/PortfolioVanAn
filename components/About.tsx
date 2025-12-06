'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              I'M HẢI
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>
                Tôi là Hải, 21 tuổi, freelancer trong lĩnh vực sáng tạo truyền
                thông, hiện đang theo học ngành Thiết kế Mỹ thuật số.
              </p>
              <p>
                Với kinh nghiệm thực tế trong việc sáng tạo nội dung, video
                editing và kể chuyện bằng hình ảnh, tôi rất mong muốn được áp
                dụng kỹ năng của mình và phát triển bản thân với tư cách là
                Media Intern tại Chiic Digital.
              </p>
            </div>

            {/* Kỹ năng */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">KỸ NĂNG</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Chụp ảnh', 'Quay & Dựng', 'Thiết kế đồ họa', 'Làm việc nhóm', 'Giải quyết vấn đề'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-black text-white text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Progress Bars */}
              <div className="space-y-5 mb-8">
                {[
                  { skill: 'Chụp ảnh', level: 90 },
                  { skill: 'Quay & Dựng', level: 95 },
                  { skill: 'Thiết kế đồ họa', level: 85 },
                  { skill: 'Làm việc nhóm', level: 90 },
                  { skill: 'Giải quyết vấn đề', level: 88 },
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">{item.skill}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        className="text-sm font-bold text-gray-600"
                      >
                        {item.level}%
                      </motion.span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: index * 0.1 + 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                        className="h-full bg-gradient-to-r from-black to-gray-800 rounded-full relative"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Software Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-6">CÔNG CỤ</h3>
                <div className="grid grid-cols-4 gap-3 md:gap-4">
                  {[
                    { 
                      name: 'DaVinci Resolve', 
                      short: 'DR',
                      color: 'bg-black', 
                      textColor: 'text-white',
                      icon: <div className="text-base font-black">DR</div>
                    },
                    { 
                      name: 'Premiere Pro', 
                      short: 'Pr',
                      color: 'bg-[#00005b]', 
                      textColor: 'text-white',
                      icon: <div className="text-base font-bold">Pr</div>
                    },
                    { 
                      name: 'Photoshop', 
                      short: 'Ps',
                      color: 'bg-[#001d34]', 
                      textColor: 'text-white',
                      icon: <div className="text-base font-bold">Ps</div>
                    },
                    { 
                      name: 'Lightroom', 
                      short: 'LrC',
                      color: 'bg-[#1b1b1b]', 
                      textColor: 'text-white',
                      icon: <div className="text-xs font-bold">LrC</div>
                    },
                    { 
                      name: 'CapCut', 
                      short: 'CC',
                      color: 'bg-white', 
                      textColor: 'text-black', 
                      border: 'border-2 border-gray-300',
                      icon: (
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 3h18v18H3z" strokeLinecap="round"/>
                          <path d="M9 9h6v6H9z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Illustrator', 
                      short: 'Ai',
                      color: 'bg-[#ff9a00]', 
                      textColor: 'text-white',
                      icon: <div className="text-base font-bold">Ai</div>
                    },
                    { 
                      name: 'After Effects', 
                      short: 'Ae',
                      color: 'bg-[#00005b]', 
                      textColor: 'text-white',
                      icon: <div className="text-base font-bold">Ae</div>
                    },
                    { 
                      name: 'Figma', 
                      short: 'Fi',
                      color: 'bg-black', 
                      textColor: 'text-white',
                      icon: (
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.264 7.51h3.588c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.588V7.51zm0 1.471H8.26c-2.476 0-4.49-2.014-4.49-4.49S5.784 0 8.26 0h3.588v8.981zm-3.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.02 3.019 3.02h3.587V1.471H8.677zm4.588 15.019H8.26c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.26 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.588V8.981H8.26zm7.592 0h-3.588v8.981h3.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.491-4.49-4.491zm-3.588 1.471h3.588c1.665 0 3.019 1.355 3.019 3.019s-1.355 3.019-3.019 3.019h-3.588v-6.038z"/>
                        </svg>
                      )
                    },
                  ].map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`group aspect-square ${tool.color} ${tool.textColor} ${tool.border || ''} rounded-lg flex flex-col items-center justify-center p-2 md:p-3 cursor-pointer transition-all duration-300 hover:shadow-xl`}
                      title={tool.name}
                    >
                      <div className="flex items-center justify-center mb-1">
                        {tool.icon}
                      </div>
                      <div className="text-[8px] md:text-[9px] font-medium text-center opacity-80 group-hover:opacity-100 transition-opacity">
                        {tool.short}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Thành tích */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">THÀNH TÍCH</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Top 5 Sinh viên Hoạt động phong trào xuất sắc Kỳ Spring 2025</li>
                <li>• Giải Nhì cuộc thi Nhiếp ảnh "Shoot The Love" - Bộ môn Thiết kế Mỹ thuật số</li>
                <li>• Top 9 Outstanding "Brothers & Sisters" Project 2023</li>
              </ul>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-8 px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              CONTACT ME
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Học tập */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-4">HỌC TẬP</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Thiết kế Mỹ thuật số</p>
                  <p className="text-sm text-gray-600">10/2020 - Hiện tại</p>
                  <p className="text-sm text-gray-600">FPT University Đà Nẵng</p>
                </div>
              </div>
            </div>

            {/* Kinh nghiệm */}
            <div className="bg-white p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold mb-4">KINH NGHIỆM</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold">Media Freelancer</p>
                  <p className="text-sm text-gray-600 mb-2">FPT University Đà Nẵng - Facebook Fanpage</p>
                  <p className="text-sm text-gray-500">5/2021 - Hiện tại</p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1 list-disc list-inside">
                    <li>Sản xuất và biên tập 20+ video và reels</li>
                    <li>Hợp tác với các nhóm sinh viên cho 10+ sự kiện</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Videographer & Editor</p>
                  <p className="text-sm text-gray-600 mb-2">Đại Học FPT Đà Nẵng - TikTok Channel</p>
                  <p className="text-sm text-gray-500">5/2021 - Hiện tại</p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1 list-disc list-inside">
                    <li>Quay, chỉnh sửa và xuất bản 200+ video ngắn</li>
                    <li>10.000 followers, hơn 3 triệu lượt xem</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Media Leader</p>
                  <p className="text-sm text-gray-600 mb-2">CLB FU-DEVER, CLB Rhythm, CLB FGD</p>
                  <p className="text-sm text-gray-500">1/2024 - 6/2025</p>
                  <ul className="text-sm text-gray-700 mt-2 space-y-1 list-disc list-inside">
                    <li>Dẫn dắt nhóm truyền thông của 3 câu lạc bộ</li>
                    <li>Quản lý nhóm ~10 thành viên</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CV Link */}
            <motion.a
              href="/CV_Đoàn Phước Trường Hải_Media Intern.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-black text-white p-4 hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">XEM CV</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <a
                href="mailto:truonghai.work@gmail.com"
                className="text-lg font-semibold hover:text-gray-600 transition-colors"
              >
                truonghai.work@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <a
                href="tel:+84364605132"
                className="text-lg font-semibold hover:text-gray-600 transition-colors"
              >
                036.460.5132
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Địa chỉ</p>
              <p className="text-lg font-semibold">
                Hòa Hải, Ngũ Hành Sơn, Đà Nẵng
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black flex items-center justify-center">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Facebook</p>
              <a
                href="https://fb.com/hiiicris3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:text-gray-600 transition-colors"
              >
                fb.com/hiiicris3
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
