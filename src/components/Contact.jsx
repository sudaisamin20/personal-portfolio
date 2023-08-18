import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-white'>
            <div className='flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</h1>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/5eead825-bf91-47a2-82fd-1e5396ebaee4" method='POST' className='flex flex-col w-full md:w-1/2'>

                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="email" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                        <button placeholder='Message Here' className='text-white bg-gradient-to-b from-black to-gray-500 py-3 px-6 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
