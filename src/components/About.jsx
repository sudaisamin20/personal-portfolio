import React from 'react'
import Aos from 'aos';

const About = () => {
        Aos.init({
            once: true,
            duration: 1200,
            easing: 'ease-in-out',
        })
        window.scrollTo(0, 0)
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
            <div className='flex flex-col justify-center max-w-screen-lg p-4 w-full h-full mx-auto'>
                        <div data-aos="fade-right" className='pb-8'>
                            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
                        </div>
                        <p data-aos="fade-up" className='text-lg sm:text-xl mt-10'>
                            Hey there! I'm a full stack developer, and I absolutely love building things for the web. I'm like a digital architect – I specialize in making websites look and feel awesome using tools like React. I'm the person behind the scenes making sure that when you click a button or scroll down, everything works smoothly and looks great.
                        </p>
                <br />
                        <p data-aos="fade-up" className='text-lg sm:text-xl'>
                            While I'm really good at making websites look fantastic, I'm also no stranger to the technical stuff. I know my way around the backend too, which is like the engine of a car – it powers everything behind the scenes. So, whether it's creating eye-catching designs or making sure everything runs seamlessly, I've got you covered. I'm on a journey to keep learning and improving, so I can keep making websites that people love to use.
                        </p>
            </div>
        </div>
    )
}

export default About
