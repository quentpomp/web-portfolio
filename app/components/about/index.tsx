'use client'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import Image from 'next/image';
import { IoCloseSharp } from "react-icons/io5";
import { motion, useScroll } from "framer-motion";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import calculating from "../../../public/images/calculating.png"

type Props = {setIdx: Dispatch<SetStateAction<number>>}
// Dispatch<SetStateAction<number>>

export default function About({setIdx}: Props) {

//   const [text, count] = useTypewriter({
//     words: [
//         "Hey there, I'm Quentin, but you can call me Q. I'm a software engineer and jazz pianist located in the NYC area. I graduated from NYU with a double major in Computer Science and Jazz Studies. According to my birth certificate, I'm 23. That said, I try to approach anything I do with the excitement and enthusiasm of a 10 year old. I've been software engineering for 4-ish years. In that time, I've worked with both startups and tech giants, helping them realize their goals. I feel most alive working on the frontend, but I consider myself adept on the full-stack, and can train an AI model to choose what wine would best suit your tastebuds (@Kaggle). Recently, I've been into deep neural networks, specifically their use in GPTs."
//     ],
//     loop: 1,
//     delaySpeed: 1000,
//     typeSpeed: 50,
// })  
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

    const close = () => {
        setIdx(-1);
        return 0
    }
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: scrollRef });

  return (
    <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        className='relative w-full h-full flex flex-col lg:flex-row justify-around items-center overflow-y-scroll no-scrollbar'>
        <motion.div 
            whileHover={{scale: 1.1}}
            className='fixed top-3 right-3 w-8 h-8 rounded-full bg-blue-300 hover:bg-blue-400 flex justify-center items-center cursor-pointer'>
            <IoCloseSharp size={25} color="teal" onClick={close}/>
        </motion.div>
        
        <motion.div
            variants={children}                 
        >
            <Image 
                src={calculating}
                alt="calculating"
                width={300}
                height={300}
            />
        </motion.div>

        <motion.div 
            variants={children}                 
            className='text-sm md:w-2/3 lg:w-1/2 overflow-y-scroll no-scrollbar font-semibold text-left text-black' ref={scrollRef}>
                Hey there, I'm Quentin, but you can call me Q. I'm a software engineer and jazz pianist located in the NYC area.
                I graduated from NYU with a double major in Computer Science and Jazz Studies. According to my birth certificate, 
                I'm 23. That said, I try to approach anything I do with the excitement and enthusiasm of a 10 year old. I've been software 
                engineering for 3-ish years. In that time, I've worked with both startups and tech giants, helping them realize their goals. 
                I feel most alive working on the frontend, but I consider myself adept on the full-stack, and can train an AI model to choose 
                what wine would best suit your tastebuds (@Kaggle) Recently, I've been into deep neural networks, specifically their use in GPTs.
                <br />
                <br />
                qpompliano@gmail.com / qp256@nyu.edu
                <br />
                (609) 917 4260
            {/* <span>{text}</span>
            <Cursor cursorColor='teal' /> */}
            {/* I love music just as much as I love engineering. I also love to be curious. When I'm curious, I'm creative, and both are essential in 
            music and software engineering. Music tends to be my way to flush out curiousity; it's easy to get caught up in the repetitiveness of 
            <code className='text-[#F88379]'>{" <div></div> "}</code> and <code className='text-[#F88379]'>{" public static void main(String[] args)"}</code>. 
            That said, it's also easy to use muscle memory, and play the same licks (a series of notes, for those who are unfamiliar) anytime I sit 
            at the piano. My escape from software engineering is music, and my escape from music is software engineering. I like to exercise too, I guess. */}
        </motion.div>
        <svg 
            // variants={children}
            className='-rotate-90 absolute right-1 bottom-1 fill-none stroke-[5px] stroke-blue-300 flex justify-center items-center md:hidden' width="60" height="60" viewBox="0 0 60 60">
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