import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import "./Style.css"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  // eslint-disable-next-line
  const [menuList, setMenuList] = useState("")
  // eslint-disable-next-line
  // const [ulClass, setUlClass] = useState("")
  const addMenuClass = () => {
    if(!nav){
      setMenuList("bars")
      // setUlClass("li-items-bars")
    }
    else{
      setMenuList("cancel")
      // setUlClass("li_items-cancel")
    }
  }
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "projects"
    },
    {
      id: 4,
      link: "experience"
    },
    {
      id: 5,
      link: "contact"
    },
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed z-20'>
      <div>
        <motion.h1 initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 1}} className='text-5xl max-[300px]:text-3xl font-signature ml-2'>Sudais Amin</motion.h1>
      </div>
      <motion.ul initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1}} className='hidden md:flex '>
        {links.map(({ id, link }) => {
          return <li key={id} className='px-4 text-gray-500 font-medium cursor-pointer capitalize hover:scale-110 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
        })}
      </motion.ul>
      <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} transition={{duration: 1}} onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes className='box-times' onClick={addMenuClass} size={30} /> : <FaBars className='box-bars' onClick={addMenuClass} size={30} />}
      </motion.div>
      {nav && 
      <ul className={`ul-box flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gradient-to-b from-black to-gray-800 text-gray-500 ${menuList}`}>
        {links.map(({ id, link }) => {
          return <li key={id} className='py-6 px-4 cursor-pointer capitalize text-4xl hover:scale-125 duration-200 ease-in-out '><Link onClick={()=>setNav(!nav)} to={link} smooth duration={500} >{link}</Link></li>
        })}
      </ul>
      }
    </div>
  )
}

export default Navbar
