import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { BsArrow90DegLeft } from "react-icons/bs"
import { ProjData } from './projects'
import Popup from './Popup'

type Props = { project: ProjData }

export default function ProjDisplayer({ project }: Props) {

    const container = {
        hidden: { opacity: 1, scale: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2
            },
        }
    };

    const children = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className='w-full h-full p-5 flex flex-col justify-center items-end gap-5'>
            <div className='text-end'>
                <motion.h1
                    variants={children}
                    className='font-semibold text-sm lg:text-lg text-black'>
                    {project.title}
                </motion.h1>
                <motion.h2
                    variants={children}
                    className='font-sm text-xs text-black uppercase'>
                    {project.date}
                </motion.h2>
            </div>
            <ul
                className='w-full overflow-y-scroll flex flex-col justify-start no-scrollbar rounded-xl'>
                <motion.p
                    variants={children}
                    className='text-sm font-semibold p-1 rounded-md text-end text-black'>
                    {project.description}
                </motion.p>
            </ul>

            <div className='w-full flex flex-row items-center justify-end gap-2'>
                {project.links.map((link) => {
                    return (
                        <motion.a
                            variants={children}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='relative z-100 p-1 bg-blue-400 rounded-lg'
                            whileHover={{ scale: 1.2 }}
                        >
                            <Image
                                src={link.icon}
                                alt={link.alt}
                                width={35}
                                height={35}
                            />
                        </motion.a>
                    )
                })}
                {project.links.length === 0 &&
                    <motion.div variants={children} className='text-sm text-black font-normal tracking-[1px]'>links coming soon...</motion.div>}
            </div>
            {project.links.length !== 0 && <Popup text={"check out the links!"}/>}
        </motion.div>
    )
}