'use-client'
import React, { Dispatch, SetStateAction, useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from "framer-motion"
import { IoCloseSharp } from 'react-icons/io5'
import {ExpData, Experiences } from "./data"
import { ExpInfo } from './experience'
import ExpDisplayer from './ExpDisplayer'


type Props = { setIdx: Dispatch<SetStateAction<number>> }

export default function Experience({ setIdx }: Props) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2
            }
        }
    };

    const children = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const [selected, setSelected] = useState("Amazon")
    const close = () => {
        setIdx(-1);
        return 0
    }
    return (
        <motion.div className='relative w-full h-full lg:w-4/5 lg:h-5/6 flex flex-col lg:flex-row justify-start items-center rounded-xl'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                className='fixed top-3 right-3 w-8 h-8 rounded-full bg-blue-300 hover:bg-blue-400 flex justify-center items-center cursor-pointer'>
                <IoCloseSharp size={25} color="teal" onClick={close} />
            </motion.div>

            <div className='flex flex-row lg:flex-col w-3/4 h-[40px] lg:w-1/5 lg:h-1/3 justify-evenly lg:justify-center items-center border-2 border-b-blue-300 border-t-0 border-l-0 lg:border-b-0 border-r-0 lg:border-r-2 lg:border-r-blue-300 mb-5 lg:mr-5'>
                {Experiences.map((experience, idx) => {
                    return (
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                            key={idx}
                            className='relative text-sm font-semibold w-full h-full flex flex-row justify-between lg:justify-around items-center cursor-pointer'
                            onClick={() => setSelected(experience.id)}
                            
                        >
                            <motion.div variants={children} className='relative z-20 px-2 lg:px-0 text-black' whileHover={{ scale: 1.1 }}>{experience.company}</motion.div>
                            {selected === experience.id ? (
                                <>
                                    <motion.div className='absolute w-full h-full bg-blue-300 -z-1 rounded-t-md lg:rounded-t-none lg:rounded-tl-md lg:rounded-bl-md' layoutId="highlight"/>
                                    <motion.div className="absolute w-full lg:w-[2px] h-[2px] lg:h-full bottom-0 lg:right-0 bg-teal-500" layoutId="underline" />
                                </>
                            ) : null}
                        </motion.div>
                    )
                })}
            </div>
            {selected === "Amazon" && <ExpDisplayer selected={ExpData[`${selected}` as keyof ExpInfo]}/>}
            {selected === "Zecstra" && <ExpDisplayer selected={ExpData[`${selected}` as keyof ExpInfo]}/>}
            {selected === "GlobalIDs" && <ExpDisplayer selected={ExpData[`${selected}` as keyof ExpInfo]}/>}
            {/* <div className='w-4/5 h-4/5 lg:h-full lg:w-full absolute -z-10 p-3'></div> */}
        </motion.div>
    )
}