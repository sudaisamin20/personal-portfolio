import React from 'react'
import heroPic from '../assests/20220728_172006.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './Style.css'
import { Link } from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const Home = () => {
    Aos.init({ 
      once: true,
      easing: 'ease-in-out',
  })
    window.scrollTo(0, 0)
  
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black to-gray-900'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
        <div className='px-2 flex flex-col justify-center h-full'>
              <div>
                <h1 data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1200"  className='max-width-font text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>I'm a Full Stack (MERN) Developer</h1>
              </div>
            
              <p data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1200" className='py-4 text-gray-400'>
                I haven't that much experience to be a professional but i have a strong foundation in front-end technologies, particularly React. While my expertise leans towards crafting intuitive user interfaces and seamless interactions, I have also honed my backend capabilities to deliver complete and functional web applications.</p>

              <div data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1200">
                <Link to='projects' smooth duration={500} className='text-white bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-3 w-fit flex items-center rounded-md hover:scale-110 duration-200 cursor-pointer'>
                  Projects
                  <span className='hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} />
                  </span>
                </Link>
              </div>
        </div>
        <div>
              <motion.img initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.6 }} src={heroPic} alt="MyProfile" className='rounded-2xl w-3/12 mx-auto md:w-screen lg:w-1/2' />
        </div>
      </div>
    </div>
  )
}

export default Home

// rounded-2xl max-[320px]:w-[40vw] max-[320px]:h-[20vh] w-[60vw] h-[40vh] object-cover mx-auto md:w-screen lg:w-1/2