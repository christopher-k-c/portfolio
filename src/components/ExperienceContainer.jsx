import React from 'react'
import {motion} from 'framer-motion'
import uxpImage from './assets/experienceImages/uxp.png'

export const ExperienceContainer = ({data}) => {
  return (
    <main className="container mx-auto px-4 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center py-32"
      >
        <h3 className='uppercase tracking-[20px] lg:text-6xl md:text-6xl sm:text-4xl text-lg font-bold bg-gradient-to-r from-slate-400 via-indigo-600 to-indigo-600 text-transparent bg-clip-text'>
          Experience
        </h3>
      </motion.div>
      

      <div className="grid gap-6 z-10 max-w-7xl mx-auto">
        {/* Main Experience Card */}
        <div className="overflow-hidden rounded-lg border border-gray-700 backdrop-blur-lg bg-darkRoast bg-opacity-30 z-20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="mb-4 text-2xl font-semibold text-indigo-400">Studio Retoucher & Adobe UXP Developer</h2>
              <p className="mb-6 text-gray-400">New Look · 2022-Present</p>
              <div className="mb-8 flex flex-wrap gap-2">
                {["Adobe UXP API", "Adobe Photoshop API", "JavaScript ES6", "React", "CSS","GitHub","Photoshop", "Automation"].map((tech) => (
                  <span key={tech} className="rounded-full px-4 py-1 bg-[#050917]/50 text-white border-0 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• Developing Adobe plugins using the Photoshop & UXP API</li>
                <li>• Developing a Team Performance Dashboard with Next.js, Tailwind CSS and Superbase</li>
                <li>• Developed an Adobe Photoshop plugin which automates retouching workflows</li>
                <li>• Established version control with Git/GitHub</li>
                <li>• Delivered technical documentation and user guides for all custom tools</li>
                <li>• Implementing efficiency improvements across the studio</li>
                <li>• Delivering high-quality images in a fast-paced environment</li>
                <li>• Managing freelance workloads</li>
              </ul>
            </div>
            <div className="bg-[#050917] h-full flex flex-col items-center justify-center p-12">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={uxpImage}
                  alt="New Look UXP Plugin Interface"
                  className="rounded-lg shadow-2xl border border-gray-800"
                />
              </motion.div>
              <p className="mt-4 text-sm text-gray-400 text-center">
                Custom Adobe UXP Plugin: Automating retouching workflows with single and batch actions
              </p>
            </div>
          </div>
        </div>

        {/* Grid of smaller experience cards */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 ">
          {/* Software Engineering */}
          <div className="p-8 rounded-lg border border-gray-700 backdrop-blur-lg bg-darkRoast bg-opacity-30 shadow-2xl z-20">
            <h2 className="mb-4 text-2xl font-semibold text-indigo-400">Software Engineering</h2>
            <p className="mb-2 text-sm text-gray-400">General Assembly · 2022</p>
            <div className="mb-6 flex flex-wrap gap-2">
              {["JavaScript", "HTML", "CSS", "React", "Node.js", "Express","MongoDB", "Mongoose", "Heroku", "Python", "Django", "PostgreSQL", "PGAdmin","PostMan", "Git", "Figma"].map((tech) => (
                <span key={tech} className="rounded-full px-4 py-1 bg-[#050917]/50 text-white border-0 text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Full-stack web development training (13 weeks)</li>
              <li>• Developed full-stack applications</li>
              <li>• Built applications following Model-View-Controller</li>
              <li>• Built responsive frontend interfaces with React</li>
              <li>• Implemented user authentication and authorization</li>
              <li>• Designed database schemas and ERDs</li>
              <li>• Built with PostgreSQL and MongoDB</li>
              <li>• Implemented Git version control </li>
              <li>• Experienced solo, pair and team programming</li>
              <li>• Used Figma for Wireframing</li>
              <li>• Wrote User stories to plan development</li>
            </ul>
          </div>
          {/* bg-black !bg-opacity-100 */}
          {/* Retouch Manager */}
          <div className="relative p-8 rounded-lg border border-gray-700 backdrop-blur-lg bg-darkRoast bg-opacity-30 shadow-2xl z-20">
            <div className="absolute inset-0  rounded-lg z-10" /> 
            <div className="relative z-30">
              <h2 className="mb-4 text-2xl font-semibold text-indigo-400">Retouch Manager</h2>
              <p className="mb-2 text-sm text-gray-400">JoJo Maman Bebe · 2015-2022</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {["Team Management", "Adobe Photoshop", "Capture One", "Adobe Lightroom", "Adobe Bridge", "Adobe InDesign", "Adobe Acrobat","Adobe Creative Cloud", "Magento", "FTP", "Python", "JavaScript"].map((tech) => (
                  <span key={tech} className="rounded-full px-4 py-1 bg-[#050917]/50 text-white border-0 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Led a team of Retouchers and Photographers</li>
                <li>• Managed end-to-end production process</li>
                <li>• Oversaw budget allocation for freelance resources </li>
                <li>• Coordinated with external agencies and brands</li>
                <li>• Automated Photoshop workflows with JavaScript</li>
                <li>• Developed a file-finding tool using Python</li>
                <li>• Established and documented studio guidelines</li>
                <li>• Managed cross-departmental communication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
