'use client'
import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react'
import { IoCloseSharp } from 'react-icons/io5';

type Props = {setIdx: Dispatch<SetStateAction<number>>}

export default function Store({setIdx}: Props) {
    const close = () => {
        setIdx(-1);
        return 0
    }
  return (
    <motion.div className='w-full h-full p-5 flex flex-col md:flex-row justify-around items-center'>
        <motion.div 
            whileHover={{scale: 1.1}}
            className='absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-300 hover:bg-blue-400 flex justify-center items-center cursor-pointer'>
            <IoCloseSharp size={25} color="teal" onClick={close}/>
        </motion.div>
        <h1 className='text-black font-semibold text-sm'>
            Mini marketplace coming soon...
        </h1>
    </motion.div>
  )
}