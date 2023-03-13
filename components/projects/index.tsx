'use client'
import { motion, AnimatePresence } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import BackgroundImages from './BackgroundImages';
import { Projs, ProjData } from "./data"
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp } from 'react-icons/fa';
import { ProjInfo } from './projects';
import ProjDisplayer from './ProjDisplayer';

type Props = { setIdx: Dispatch<SetStateAction<number>> }

export default function Projects({ setIdx }: Props) {
    const close = () => {
        setIdx(-1);
        return 0
    }
    const cycleForwards = () => {
        setSelectedProjectIdx(Math.abs((selectedProjectIdx + 1) % Projs.length))
    }

    const cycleBackwards = () => {
        selectedProjectIdx == 0 ? setSelectedProjectIdx(Projs.length - 1) : setSelectedProjectIdx(selectedProjectIdx - 1)
    }

    const [selectedProjectIdx, setSelectedProjectIdx] = useState<number>(0)

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                className='z-20 absolute top-3 right-3 w-8 h-8 rounded-full bg-blue-300 hover:bg-blue-400 flex justify-center items-center cursor-pointer'>
                <IoCloseSharp size={25} color="teal" onClick={close} />
            </motion.div>
            <motion.div className='relative w-full h-full flex flex-col lg:flex-row justify-between items-center'>



                <motion.div
                    whileHover={{
                        scale: 1.2
                    }}
                    onClick={cycleBackwards}
                    className='relative z-10 w-[40px] h-[40px] flex justify-center items-center text-blue-400 hover:text-blue-500'>
                    <FaChevronLeft size={30} className='invisible lg:visible absolute opacity-90' />
                    <FaChevronUp size={30} className='lg:invisible absolute opacity-90' />
                </motion.div>

                {/* repetitive so animations can be retriggered (might be a little jerryrigged) */}
                {selectedProjectIdx == 0 &&
                    <>
                        <BackgroundImages images={ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo].imgs} />
                        <ProjDisplayer project={ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo]} />
                    </>
                }
                {selectedProjectIdx == 1 &&
                    <>
                        <BackgroundImages images={ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo].imgs} />
                        <ProjDisplayer project={ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo]} />
                    </>
                }
                {selectedProjectIdx == 2 &&
                    <>
                        <BackgroundImages images={ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo].imgs} />
                        <ProjDisplayer project={ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo]} />
                    </>
                }



                <motion.div
                    whileHover={{
                        scale: 1.2
                    }}
                    onClick={cycleForwards}
                    className='relative z-10 w-[40px] h-[40px] flex justify-center items-center text-blue-400 hover:text-blue-500'>
                    <FaChevronRight size={30} className='invisible lg:visible absolute opacity-90' />
                    <FaChevronDown size={30} className='lg:invisible absolute opacity-90' />
                </motion.div>
            </motion.div>
        </>

    )
}

// ProjData[Projs[selectedProjectIdx].id as keyof ProjInfo]