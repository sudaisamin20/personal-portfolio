import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
        <div className='flex flex-col justify-center max-w-screen-lg p-4 w-full h-full mx-auto'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
            </div>
            <p className='text-lg sm:text-xl mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe iure adipisci provident eum laboriosam! Vero ipsa eveniet minus saepe modi pariatur commodi eum obcaecati. Laborum possimus placeat nemo pariatur assumenda omnis officia nam at, obcaecati, molestiae voluptates id repellendus quo fugiat quaerat, eos aut iste fuga cumque eum dolor.
            </p>
            <br />
            <p className='text-lg sm:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, numquam ut? Earum, doloremque. Ea soluta animi consectetur necessitatibus! Itaque sit non asperiores distinctio debitis iure corrupti, earum, explicabo iste sapiente repellendus. Optio neque quis alias labore quasi hic officiis consequuntur quidem voluptatum, doloribus quaerat, excepturi illo et tempore. Officiis, nemo.
            </p>
        </div>
    </div>
  )
}

export default About
