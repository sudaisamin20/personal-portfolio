import React from 'react'
import html from "../assests/experience/html.png";
import css from "../assests/experience/css.png";
import javascript from "../assests/experience/javascript.png";
import reactjs from "../assests/experience/reactjs.png";
import tailwindcss from "../assests/experience/tailwindcss.png";
import nodejs1 from "../assests/experience/nodejs1.png";
import expressjs from "../assests/experience/expressjs.png";
import mongodb from "../assests/experience/mongodb.png";

const Experience = () => {
    const tech = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-700"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-400"
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-400"
        },
        {
            id: 4,
            src: reactjs,
            title: "ReactJS",
            style: "shadow-cyan-300"
        },
        {
            id: 5,
            src: tailwindcss,
            title: "Tailwind CSS",
            style: "shadow-cyan-500"
        },
        {
            id: 6,
            src: nodejs1,
            title: "NodeJS",
            style: "shadow-green-500"
        },
        {
            id: 7,
            src: expressjs,
            title: "ExpressJS",
            style: "shadow-gray-400"
        },
        {
            id: 8,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-600"
        },
    ]
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-900 to-black w-full text-white md:h-full'>
            <div className='max-w-screen-lg p-4 mx-auto w-full h-full'>
                <div className='pb-8'>
                    <h1 className='font-bold text-4xl p-2 border-b-4 border-gray-500 inline'>Experiences</h1>
                    <p className='py-6'>There are some technologies i've worked with</p>
                </div>
                <div className='grid max-[400px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-8 items-center sm:px-0 px-12 w-full text-center'>
                    {tech.map(({ id, src, title, style }) => {
                        return <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg flex flex-col justify-center h-full ${style}`}>
                            <img src={src} alt="" className="max-[260px]:w-12 max-[260px]:h-12 w-20 sm:w-28 mx-auto  max-[400px]:h-20 max-[400px]:w-20" />
                            <h1 className="mt-4">{title}</h1>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience
