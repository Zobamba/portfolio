import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className="px-8 sm:px-32 pt-16">
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">Portfolio Highlights</h1>
        <p className="text-base sm:text-lg mb-4 text-gray-500 text-center">
          Explore a selection of applications I’ve developed
        </p>
      </div>
      <div>
        <ul>
          {[
            {
              title: 'Onassify',
              description:
                'Your next-generation Point of Sale and Inventory Management app that simplifies business, boosts productivity, and drives results.',
              video: 'https://res.cloudinary.com/ddt4oo78m/video/upload/v1763467542/Onassify.mov',
            },
            {
              title: 'Learn Axis',
              description:
                'A simple yet powerful Learning Management System designed to help you grow and excel effortlessly!',
              image: '/learn-axis.jpg',
              link: 'https://lms-obc.netlify.app/',
            },
            {
              title: 'Delic Restaurant',
              description:
                'A digital platform enabling users to browse, order, and track meals seamlessly.',
              image: '/delic.jpeg',
              link: 'https://delic.netlify.app/',
            },
            {
              title: 'Delic Admin',
              description:
                'An admin dashboard for managing the restaurant’s menu, including adding, updating, and removing dishes, as well as monitoring and fulfilling incoming orders.',
              image: '/delic-admin.png',
              link: 'https://delic-admin.netlify.app/',
            },
            {
              title: 'Delic Backend',
              description:
                'A robust backend system powering the Delic Restaurant application, handling user requests, order processing, and seamless communication between the database and frontend.',
              image: '/delic-be.jpeg',
              link: 'https://github.com/Zobamba/Delic',
            },
            {
              title: 'Kings Avatar',
              description:
                'A user-friendly tool for creating and customizing profile pictures with ease, enabling unique and personalized displays.',
              image: '/kings-avatar.jpg',
              link: 'https://kings-avatar.netlify.app/',
            },
          ].map((project, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-24"
            >
              <div className="w-full sm:w-2/3 mb-4 sm:mb-0">
                {project.video ? (
                  <video width={600} height={600} controls muted playsInline className="">
                    <source src={project.video} type="video/quicktime" />
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : project.image ? (
                  <Image
                    width={600}
                    height={600}
                    alt={project.title}
                    src={project.image}
                    className=""
                  />
                ) : null}
              </div>
              <div className="w-full sm:w-1/3 sm:pl-8">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">{project.title}</h1>
                <p className="text-base sm:text-lg mb-4 text-gray-500">{project.description}</p>
                {project.link && (
                  <Link
                    className="bg-[#00FFD0] p-3 rounded hover:opacity-65 cursor-pointer"
                    href={project.link}
                    target="blank"
                  >
                    View Application
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Portfolio
