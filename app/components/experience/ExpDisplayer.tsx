import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"
import { CompanyData } from './experience';

type Props = { selected: CompanyData }

export default function ExpDisplayer({ selected }: Props) {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: scrollRef });

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
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

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className='w-4/5 h-4/5 lg:h-full lg:w-full rounded-xl flex flex-col justify-start gap-5 items-end p-3'>
            <motion.div
                variants={children}
            >
                <Image
                    src={selected.img}
                    alt={selected.company}
                    width={75}
                    height={75}
                    className='rounded-sm'
                />
            </motion.div>
            <div className='text-end'>
                <motion.h1
                    variants={children}
                    className='font-semibold text-sm md:text-lg text-black'>
                    {selected.title}
                </motion.h1>
                <motion.h2
                    variants={children}
                    className='font-auto text-xs opacity-40 text-black uppercase'>
                    {selected.workedFrom}
                </motion.h2>
            </div>

            <motion.div
                variants={children}
                className='flex flex-row justify-end items-center gap-1 w-full md:w-2/3 lg:w-3/4'>
                {selected.skills.map((img, idx) => {
                    return (
                        <motion.div
                            variants={children}
                            key={idx}
                            className='p-1 rounded-md w-[45px] h-[45px]  flex justify-center items-center'>
                            <Image
                                
                                src={img.img}
                                alt={img.alt}
                            />
                        </motion.div>
                    )
                })}
            </motion.div>
            <div className='md:h-[20px]' />
            <motion.ul
                ref={scrollRef}
                className='w-full overflow-y-scroll flex flex-col justify-start no-scrollbar rounded-xl'>
                {selected.summary.map((text, idx) => {
                    return (
                        <motion.li
                            key={idx}
                            variants={children}
                            className='text-sm font-semibold p-1 rounded-md text-end text-black'>
                            {text}
                        </motion.li>
                    )
                })}
            </motion.ul>
            <svg className='md:hidden fixed -rotate-90 right-1 bottom-1 fill-none stroke-[5px] stroke-blue-300 flex justify-center items-center' width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="20" pathLength="1" className="stroke-[5px] opacity-20" />
                <motion.circle
                    cx="30"
                    cy="30"
                    r="20"
                    pathLength="1"
                    className="stroke-blue-400 stroke-[5px] opacity-90"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>
        </motion.div>
    )
}