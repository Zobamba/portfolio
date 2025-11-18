'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/src/components/header/header'
import IconTop from '@/src/components/icon-top/icon-top'
import Socials from '@/src/components/socials/socials'
import Footer from '@/src/components/footer/footer'
import Skills from '@/src/components/skills/skills'
import Link from 'next/link'

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="py-16">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 sm:px-16 md:px-28 w-full mb-24">
          <div className="flex flex-col w-full md:w-[50%]">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
              About Me
            </h1>
            <p className="text-lg mb-4 text-gray-500 text-center md:text-left">
              {"I'm"} a software engineer with 5+ years of experience building scalable,
              high-performance applications. Skilled in **React.js, Next.js, Node.js, and cloud
              platforms (AWS, Azure), with a strong focus on microservices and CI/CD automation.
            </p>
            <p className="text-lg mb-4 text-gray-500 text-center md:text-left">
              Passionate about crafting robust backend systems and intuitive UIs, I thrive in
              fast-paced environments, solving complex problems with clean, efficient code.
            </p>
            <p className="text-lg mb-4 text-gray-500 text-center md:text-left">
              Beyond coding, I enjoy video games, music, and occasional street walks.
            </p>
          </div>

          <div className="relative w-full md:w-[50%] h-[300px] md:h-[500px] mt-8 md:mt-0">
            <Image alt="my-image" src="/my-image.jpeg" layout="fill" className="object-contain" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between py-12 sm:py-16 px-8 sm:px-28 mb-8">
          <h1 className="text-4xl font-bold mb-4 p-0 m-0">Technical Skills</h1>
          <p className="text-lg mb-4 text-gray-500 text-center md:text-left">
            I am proficient with these stacks and have built amazing applications with them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
            <Skills image="/html.webp" name="HTML" />
            <Skills image="/css.webp" name="CSS" />
            <Skills image="/sass.png" name="SCSS" />
            <Skills image="/tailwind-css.svg" name="TAILWINDCSS" />
            <Skills image="/js.png" name="JAVASCRIPT" />
            <Skills image="/ts.svg" name="TYPESCRIPT" />
            <Skills image="/react.svg" name="REACT.JS" />
            <Skills image="/nxt.png" name="NEXT.JS" />
            <Skills image="/nodejs.png" name="NODE.JS" />
            <Skills image="/rails.png" name="RAILS" />
            <Skills image="/pg.png" name="POSTGRESQL" />
            <Skills image="/mysql.png" name="MYSQL" />
            <Skills image="/mon.png" name="MONGODB" />
            <Skills image="/rabbitmq.svg" name="RABBITMQ" />
            <Skills image="/aws.png" name="AWS" />
            <Skills image="/api.png" name="APIs" />
            <Skills image="/git.png" name="APIs" />
            <Skills image="/ags.png" name="APIs" />
          </div>
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[30%] mb-8 mt-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Github/Resume</h1>
            <ul className="flex flex-wrap justify-center space-x-4">
              <li className="bg-[#00FFD0] p-3 rounded hover:opacity-65 cursor-pointer">
                <Link href="https://github.com/Zobamba" target="blank" className="">
                  My Github Repo
                </Link>
              </li>
              <li className="bg-gray-100 p-3 rounded hover:opacity-65 cursor-pointer">
                <Link
                  href="https://drive.google.com/file/d/1bo30CM4ER0VwlvkOj7grvsxlSQyhdWAr/view?usp=sharing"
                  target="blank"
                  className=""
                >
                  View My Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <IconTop />
      <Socials />
      <Footer />
    </div>
  )
}

export default About
