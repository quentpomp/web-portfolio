import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion } from "framer-motion" 
import { IoCloseSharp } from 'react-icons/io5'
import Player from './Player'

type Props = { muzData: MusicData, setSelectedMusic: Dispatch<SetStateAction<number>>  }

export default function MusicCard({ muzData, setSelectedMusic }: Props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const close = () => {
        setIsPlaying(false);
        setSelectedMusic(-1);
        return 0
    }

    return (
        <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center gap-5'>
            <motion.button
                onClick={close}
                whileHover={{ scale: 1.1 }}
                className='absolute top-3 right-3 w-6 h-6 rounded-full text-blue-500 bg-blue-300 hover:bg-blue-400 hover:text-blue-600 flex justify-center items-center cursor-pointer'>
                <IoCloseSharp size={25}  />
            </motion.button>
            <Player muzData={muzData} isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
        </div>
    )
}