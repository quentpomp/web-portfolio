import React from 'react'
import { ImgData } from './projects'
import { motion } from "framer-motion"
import Image from 'next/image'

type Props = { images: ImgData[] }

export default function BackgroundImages({ images }: Props) {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            // zIndex: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const children = {
        hidden: { y: 20, scale: 0 },
        visible: {
            y: 0,
            scale: 1
        }
    };
    const rotations: string[] = ["rotate-12", "-rotate-6", "rotate-6"]
    return (
        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            className='w-full h-full absolute flex flex-row justify-center lg:justify-evenly items-center scale-105 lg:scale-100 overflow-hidden'>
            {images.map((img, idx) => {
                return (
                    <motion.div 
                        variants={children}
                        >
                        <Image
                            key={img.alt}
                            src={img.img}
                            alt={img.alt}
                            width={200}
                            height={350}
                            className={`relative rounded-lg drop-shadow-2xl border-2 border-blue-400 ${rotations[Math.floor(Math.random() * 3)]} hover:rotate-0 opacity-20 hover:opacity-100  hover:scale-125 transition duration-200 ease-in-out`}
                        />
                    </motion.div>

                )
            })}
        </motion.div>
    )
}

// w-1/4 h-1/2 md:w-1/4 md:h-3/4