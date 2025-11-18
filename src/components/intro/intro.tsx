import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 lg:px-28">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        {`I'm`} Onah Bernard Chizoba, a Software Engineer.
      </h1>
      <p className="text-base sm:text-lg mb-4 text-gray-500 text-center">
        I specialize in building scalable applications with efficient back-end architecture and
        intuitive, user-friendly interfaces, delivering solutions that are as robust as they are
        accessible.
      </p>

      <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[30%] flex items-center justify-between mb-8">
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
  )
}

export default Intro
