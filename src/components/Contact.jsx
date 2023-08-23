import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
    Aos.init({
        once: true,
        easing: "ease-in-out",
        duration: 1200
    })
    window.scrollTo(0, 0)

    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white'>
            <div className='flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <div data-aos="fade-right">
                        <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</h1>
                    </div>
                    <p data-aos="fade-down" className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/5eead825-bf91-47a2-82fd-1e5396ebaee4" method='POST' className='flex flex-col w-full md:w-1/2'>

                        <input data-aos="fade-down" type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input data-aos="fade-down" type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea data-aos="fade-down" name="message" rows="10" placeholder='Message Here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button data-aos="fade-down" className='text-white bg-gradient-to-b from-black to-gray-500 py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send Message</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
