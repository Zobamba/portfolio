import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className="flex items-center justify-between px-8 sm:px-16 md:px-28 mb-8 flex-wrap">
      <div>
        <h1 className="text-2xl font-bold">OBC</h1>
      </div>
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
      <Link
          href={'https://www.linkedin.com/in/bernard-onah-3043a11a0/'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/linkedin.svg'} alt="LinkedIn" />
        </Link>
        <Link
          href={'https://x.com/onah_chizoba'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/x-twitter.svg'} alt="X" />
        </Link>
        <Link
          href={'https://www.instagram.com/onah_zoba/'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/instagram.svg'} alt="Instagram" />
        </Link>
        <Link
          href={'https://www.facebook.com/bernard.onah/'}
          target="blank"
          className="bg-gray-100 rounded p-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          <Image width={25} height={25} src={'/fb.svg'} alt="Facebook" />
        </Link>
      </div>
    </div>
  )
}

export default Socials
