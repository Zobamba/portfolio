import Link from 'next/link'
import React from 'react'

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center px-28">
      <h1 className="text-4xl font-bold mb-2 text-center">
        {`I'm`} Onah Bernard Chizoba, a Full-Stack JavaScript Developer.
      </h1>
      <p className="text-lg mb-4 text-gray-500 text-center">
        I specialize in building scalable applications with efficient back-end architecture and
        intuitive, user-friendly interfaces, delivering solutions that are as robust as they are
        accessible.
      </p>

      <div className="w-[30%] flex items-center justify-between mb-8">
        <ul className="flex space-x-4">
          <li className="bg-[#00FFD0] p-[12px] rounded hover:opacity-65 cursor-pointer">
            <Link href="https://github.com/Zobamba" target="blank" className="">
              My Github Repo
            </Link>
          </li>
          <li className="bg-gray-100 p-[12px] rounded hover:opacity-65 cursor-pointer">
            <Link
              href="https://drive.google.com/file/d/1zTRbNh3VhjYCT1P8t2rMM06Mb0pxPdvx/view?usp=sharing"
              target="blank"
              className=""
            >
              View My Resume
            </Link>
          </li>{' '}
        </ul>
      </div>
    </div>
  )
}

export default Intro