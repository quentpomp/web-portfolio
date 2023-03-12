'use client'
import React from 'react'
import Image from 'next/image'
import hey from "../public/images/hey.png"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { FiCoffee } from "react-icons/fi"
import { motion } from 'framer-motion'
type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='absolute w-screen top-0 px-5 py-3 flex justify-between mx-auto items-center'>
            <motion.div 
                initial={{
                    x: -100,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 3,
                    duration: 0.5
                }}
                className='w-[75px] h-[75px] relative z-10'>
                <Image
                    src={hey}
                    alt="wink"
                    // width={75}
                    // height={75}
                />
            </motion.div>


            <motion.div 
                initial={{
                    x: 100,
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 2.5, 
                    duration: 0.5
                }}
                className='flex justify-between items-center w-24 relative z-10'>
                <motion.a
                    whileHover={{scale: 1.2}}
                    href='https://linkedin.com/in/quentpomp'
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='cursor-pointer'
                >
                    <FaLinkedinIn 
                        
                        size={20} 
                        color="aliceblue" 
                        className="cursor-pointer" 
                    />
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.2}}
                    href='https://github.com/quentpomp'
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FaGithub 
                        size={20} 
                        color="aliceblue" 
                        className='cursor-pointer' 
                    />
                </motion.a>
                <motion.a
                    whileHover={{scale: 1.2}}
                    href='https://www.venmo.com/u/Quentin-Pompliano'
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FiCoffee 
                        size={20} 
                        color="aliceblue" 
                        className='cursor-pointer' 
                    />
                </motion.a>
            </motion.div>

        </div>
    )
}