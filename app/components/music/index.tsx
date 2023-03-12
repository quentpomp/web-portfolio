'use-client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { IoCloseSharp } from 'react-icons/io5'
import { BsPlayCircle } from "react-icons/bs"
import Player from './Player'
import { MuzData } from './data'
import MusicCard from './MusicCard'

type Props = { setIdx: Dispatch<SetStateAction<number>> }

export default function Music({ setIdx }: Props) {
    const close = () => {
        setIdx(-1);
        setSelectedMusic(-1);
        return 0
    }

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
            opacity: 1,
            borderRadius: "10px"
        }
    };

    const [selectedMusic, setSelectedMusic] = useState<number>(-1)
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className={`relative w-full h-full p-6 flex flex-col lg:flex-row justify-center items-center gap-2 overflow-scroll` }   
            >

            <motion.button
                onClick={close}
                whileHover={{ scale: 1.1 }}
                className='fixed top-3 right-3 w-8 h-8 rounded-full bg-blue-300 hover:bg-blue-400 flex justify-center items-center cursor-pointer'>
                <IoCloseSharp size={25} color="teal" />
            </motion.button>

            <motion.a
                variants={children}
                key={11}
                onClick={() => { setSelectedMusic(11) }}
                whileHover={{ scale: 1.02 }}
                layoutId={(11).toString()}
                className='w-full lg:w-1/3 h-1/3 lg:h-full rounded-md flex justify-center items-center text-blue-400 drop-shadow-2xl border-2 border-blue-400'>
                <BsPlayCircle size={40} className={selectedMusic != -1 ? "hidden" : ""}/>
            </motion.a>
            <motion.a
                variants={children}
                key={12}
                whileHover={{ scale: 1.02 }}
                onClick={() => { setSelectedMusic(12) }}
                layoutId={(12).toString()}
                className='w-full lg:w-1/3 h-1/3 lg:h-full rounded-md flex justify-center items-center text-blue-400 drop-shadow-2xl border-2 border-blue-400'>
                <BsPlayCircle size={40} className={selectedMusic != -1 ? "hidden" : ""}/>
            </motion.a>
            <motion.a
                variants={children}
                key={13}
                whileHover={{ scale: 1.02 }}
                onClick={() => { setSelectedMusic(13) }}
                layoutId={(13).toString()}
                className='w-full lg:w-1/3 h-1/3 lg:h-full rounded-md flex justify-center items-center text-blue-400 drop-shadow-2xl border-2 border-blue-400'>
                <BsPlayCircle size={40} className={selectedMusic != -1 ? "hidden" : ""} />
            </motion.a>

            <AnimatePresence>
                {selectedMusic != -1 && (
                    <motion.div
                        // drag
                        layoutId={selectedMusic.toString()}
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, borderRadius: "10px" }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: .1
                        }}
                        className='z-20 fixed w-full lg:w-2/3 h-3/4 p-5 bg-blue-200 bg-opacity-40 backdrop-blur-lg drop-shadow-2xl text-bold  text-[aliceblue]'
                    >
                        <MusicCard setSelectedMusic={setSelectedMusic} muzData={MuzData[selectedMusic - 11]}/>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
