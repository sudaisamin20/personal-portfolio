import React from 'react'
import NewsApp from "../assests/projects/NewsApp.png";
import WeatherApp from "../assests/projects/WeatherApp.png";
import TextUtilsApp from "../assests/projects/TextUtilsApp.png";
import iNoteBookApp from "../assests/projects/iNoteBookApp.png";
import Aos from 'aos';
import "aos/dist/aos.css"

const Projects = () => {
      Aos.init({ 
        once: true,
        easing: 'ease-in-out',
    })
      window.scrollTo(0, 0)
    
    const projects = [
        {
            id: 1,
            src: NewsApp
        },
        {
            id: 2,
            src: WeatherApp
        },
        {
            id: 3,
            src: TextUtilsApp
        },
        {
            id: 4,
            src: iNoteBookApp
        },
    ]
    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-900  w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-once="true">
                        <h1 className='font-bold text-4xl inline border-b-4 border-gray-500' >Projects</h1>
                    </div>
                    <p className='py-6' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-once="true">Check out some of my projects</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, src }) => {
                        return <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1200" data-aos-once="true" key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                            <img src={src} alt="" className='hover:scale-105 duration-300' />
                            <div className='flex justify-center items-center'>
                                <button className='px-6 py-3 w-1/2 m-4 scale-105 duration-300'>Demo</button>
                                <button className='px-6 py-3 w-1/2 m-4 scale-105 duration-300'>Code</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
