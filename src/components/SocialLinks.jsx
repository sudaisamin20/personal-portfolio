import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import './Style.css'

const SocialLinks = () => {
    const Links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'http://linkedin.com',
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'http://github.com'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:sudaisamin126@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: 'http://linkedin.com',
            style: "rounded-br-md"
        }
    ]
    return (
        <div className='hidden min-[1115px]:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {Links.map(({id, child, href, style}) => {
                            return <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] ${style} hover:rounded-md hover:ml-[-10px] duration-300 ease-in-out bg-gray-500`}>
                    <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer' >
                        {child}
                    </a>
                </li>
                })}
                
            </ul>
        </div>
    )
}

export default SocialLinks
