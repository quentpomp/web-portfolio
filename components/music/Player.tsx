import React, { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react'
import { motion } from "framer-motion"
import { BsPause, BsPlay } from 'react-icons/bs'

type Props = { muzData: MusicData, isPlaying: boolean, setIsPlaying: Dispatch<SetStateAction<boolean>> }

export default function Player({ muzData, isPlaying, setIsPlaying }: Props) {
    // const song: HTMLAudioElement = new Audio(muzData.path)

    let songRef = useRef(null)
    // @ts-ignore
    // let song: HTMLAudioElement = document.getElementById(muzData.path)
    const audio = new Audio(muzData.path)


    useEffect(() => {
        // audio.play()
        
        try {
            // @ts-ignore
            songRef.current.play()
            setIsPlaying(true)
        }
        catch {
            console.log("Safari issue")
        }
        
        // song = document.getElementById(muzData.path)
        // song?.play()
    }, [])
    // const [isPlaying, setIsPlaying] = useState(true)
    return (
        <>
            <motion.div
                animate={{
                    y: [0, -60, 0],
                    rotate: 360,
                    scale: 1
                }}
                transition={{
                    delay: .5,
                    duration: .5
                }}
                className='w-[50] h-[50] rounded-lg border-2 border-blue-400 text-blue-400 flex justify-center items-center hover:bg-[aliceblue] hover:border-blue-500 hover:border-opacity-80 hover:text-blue-500 hover:rounded-xl duration-200'>
                {isPlaying ?
                    <BsPause
                        size={50}
                        onClick={() => {
                            // audio.pause()
                            try {
                                // @ts-ignore
                                songRef.current.pause()

                                // song?.pause()
                                setIsPlaying(false)
                            }
                            catch {
                                console.log("Safari issue!")
                            }

                        }} /> :
                    <BsPlay
                        size={50}
                        onClick={() => {
                            // audio.play()

                            try {
                                // @ts-ignore
                                songRef.current.play()
                                setIsPlaying(true)
                            }
                            catch {
                                console.log("Safari issue!")
                            }

                            // song?.play()

                        }} />}
                {/* <audio src={muzData.path} controls autoPlay ref={songRef} /> */}
                <audio autoPlay ref={songRef}>
                    <source src={muzData.path}/>
                </audio>

            </motion.div>
            <motion.a
                href={muzData.url}
                onClick={() => {
                    try {
                        setIsPlaying(false);
                        // @ts-ignore
                        songRef.current.pause()
                    }
                    catch {
                        console.log("Safari issue")
                    }

                    // song?.pause()
                }}
                target="_blank"
                rel="noopener noreferrer"
                className='text-blue-500 opacity-70 text-sm font-semibold text-right hover:opacity-100 hover:underline duration-100'>{muzData.caption}</motion.a>
        </>

    )
}