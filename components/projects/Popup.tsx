import React from 'react'
import { motion } from "framer-motion"
import { BsArrow90DegLeft } from 'react-icons/bs'

type Props = {text: string}

export default function Popup({text }: Props) {
    return (
        <motion.div className='flex flex-row justify-end items-center gap-2 w-full'>
            <div className='w-full flex flex-row items-center justify-end gap-2'>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{
                        x: [300, -10, -10, -10, -10, -10, -10, 100],
                        opacity: [0, 1, 1, 1, 1, 1, 0]
                    }}
                    transition={{
                        type: "spring",
                        delay: 3.1,
                        duration: 3
                    }}
                    className='text-black p-2 text-sm rounded-xl bg-teal-500 font-semibold'>
                    {text}
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0
                    }}
                    animate={{
                        x: [100, -10, -10, -10, -10, -10, -10, 100],
                        opacity: [0, 1, 1, 1, 1, 1, 0]
                    }}
                    transition={{
                        type: "spring",
                        delay: 3,
                        duration: 3
                    }}
                >
                    <BsArrow90DegLeft size={30} className='text-black rotate-90 font-semibold mb-5' />
                </motion.div>


            </div>
        </motion.div>
    )
}