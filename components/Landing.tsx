'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FaStore, FaMusic, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { FiCoffee } from "react-icons/fi"
import { MdPiano, MdComputer, MdWorkOutline } from "react-icons/md"
import { GiHoneycomb } from "react-icons/gi"
import { SiAboutdotme } from "react-icons/si"
import { AnimatePresence, motion } from "framer-motion"
import anime from 'animejs/lib/anime.es.js';

import About from './about'
import Music from './music'
import Experience from './experience'
import Store from './store'
import Projects from './projects'
type Props = {}

interface EventTarget {
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}

interface SyntheticEvent {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: Event;
    preventDefault(): void;
    stopPropagation(): void;
    target: EventTarget;
    timeStamp: Date;
    type: string;
}

export default function Landing({ }: Props) {
    const [columns, setColumns] = useState(0)
    const [rows, setRows] = useState(0)
    const [toggled, setToggled] = useState(true);

    
  
    const resizeHandler = () => {
      const width = window?.innerWidth;
      const height = window?.innerHeight;
  
      setColumns(Math.floor(width / 80))
      setRows(Math.floor(height / 80))

      // @ts-ignore
    //   animationRef.current.restart()
    };
  
    useEffect(() => {
      setColumns(Math.floor(window?.innerWidth / 80))
      setRows(Math.floor(window?.innerHeight / 80))
      window?.addEventListener('resize', resizeHandler);
      return () => {
        window?.removeEventListener('resize', resizeHandler);
      }
    }, []);
  
    const animationRef = useRef(null);
    useEffect(() => {
      // @ts-ignore
      animationRef.current = anime({
        targets: ".tile",
        opacity: toggled ? "0" : "1",
        delay: anime.stagger(50, {
          grid: [columns, rows],
          from: 0
  
        })
      });
      // @ts-ignore   
      animationRef.current.pause()
    }, []);
  
    const animationColors = [
      'rgb(20 184 166)',
      'rgb(45 212 191)',
      'rgb(147 197 253)',
      'rgb(96 165 250)'
    ]
    const playAnimation = (idx: number) => {
      // @ts-ignore
      animationRef.current.pause()
    //   console.log(idx)
      setToggled(!toggled)
  
    //   let r = Math.floor(Math.random() * 255)
    //   let g = Math.floor(Math.random() * 255)
    //   let b = Math.floor(Math.random() * 255)
      // @ts-ignore
      animationRef.current = anime({
        targets: ".tile",
        opacity: toggled ? "0" : "1",
        // backgroundColor: `rgb(${r}, ${g}, ${b})`,
        // backgroundColor: animationColors[count % (animationColors.length - 1)],
        delay: anime.stagger(40, {
          grid: [columns, rows],
          from: idx
  
        })
      });
      // @ts-ignore
      animationRef.current.play()
    }

    const [idx, setIdx] = useState<number>(-1);

    const buttons = [
        {
            icon: <FaStore size={30} color="teal" />,
            component: <Store setIdx={setIdx} />
        },
        {
            icon: <FaMusic size={30} color="teal" />,
            component: <Music setIdx={setIdx} />
        },
        {
            icon: <SiAboutdotme size={30} color="teal" />,
            component: <About setIdx={setIdx} />
        },
        {
            icon: <MdWorkOutline size={30} color="teal" />,
            component: <Experience setIdx={setIdx} />
        },
        {
            icon: <GiHoneycomb size={30} color="teal" />,
            component: <Projects setIdx={setIdx} />
        },
    ];

    const letters = "abcdefghijklmnopqrstuvwxyz"

    const hacker = (e: React.SyntheticEvent): void => {
        let iter: number = 0;
        const interval = setInterval(() => {
            // @ts-ignore
            e.target.innerText = e.target.innerText.split("")
                .map((letter: String, idx: number) => {
                    // @ts-ignore
                    if (idx < iter) return e.target.dataset.value[idx];
                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");
            // @ts-ignore
            if (iter >= e.target.dataset.value.length) clearInterval(interval);
            iter += 1 / 3;
        }, 30)
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
            opacity: 1
        }
    };

    return (
        <div className='h-screen relative z-0 p-10 flex flex-col justify-center items-center max-w-7xl text-center mx-auto my-auto'>
            <div style={{
                position: "fixed",
                zIndex: "1",
                height: "100vh",
                width: "100vw",
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`

            }}>
                {Array.from(Array(columns * rows)).map((tile, idx) => {
                    return (
                        // @ts-ignore
                        <div key={idx} className='tile' onClick={() => playAnimation(idx)} />
                    )
                })}
            </div>
            <motion.div
                drag
                dragConstraints={{
                    top: -25,
                    left: -25,
                    right: 25,
                    bottom: 25,
                }}
                variants={container}
                initial="hidden"
                animate="visible"
                className='z-10 relative h-64 py-5 px-5 bg-blue-100 flex flex-col justify-between items-center rounded-xl drop-shadow-xl'>

                <motion.div
                    variants={children}
                    data-value="quentin pompliano"
                    onMouseOver={hacker}
                    className='text-4xl tracking-[2px] font-semibold text-teal-500'>
                    quentin pompliano
                </motion.div>
                <div
                    className='w-1/2 flex flex-row justify-around items-start'>
                    <motion.div
                        variants={children}>
                        <MdComputer size={30} color="teal" />
                    </motion.div>
                    <motion.div
                        variants={children}>
                        <MdPiano size={30} color="teal" />
                    </motion.div>
                    <motion.div variants={children}>
                        <FiCoffee size={30} color="teal" />
                    </motion.div>
                </div>
                <motion.div
                    variants={children}
                    // onMouseOver={hacker}
                    data-value="fullstack engineer, jazz pianist, espresso enjoyer"
                    className='text-sm md:text-xl text-gray-400 tracking-[1.5px]'>
                    fullstack engineer, jazz pianist, espresso enjoyer
                </motion.div>
                <div className='w-3/4 flex flex-row justify-around items-center'>
                    {buttons.map((button, i) => {
                        return (
                            <motion.div
                                layoutId={i.toString()}
                                onClick={() => setIdx(i)}
                                key={i}
                                variants={children}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8, borderRadius: "20px" }}
                                transition={{
                                    type: "spring",
                                    duration: .2
                                }}
                                className='p-2 md:p-3 rounded-lg bg-blue-200 hover:bg-blue-300 hover:shadow-lg'
                            >
                                {button.icon}
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
            <AnimatePresence>
                {idx != -1 && (
                    <motion.div
                        // drag
                        // dragConstraints={{
                        //     top: -100,
                        //     left: -330,
                        //     right: 330,
                        //     bottom: 100,
                        // }}
                        layoutId={idx.toString()}
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, borderRadius: "10px" }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: .2
                        }}
                        className='z-20 absolute w-11/12 lg:w-2/3 h-3/4 p-5 bg-blue-200 bg-opacity-80 backdrop-blur-sm drop-shadow-2xl text-bold border border-blue-400 text-teal-500 flex flex-row justify-around items-center'
                    >
                        {buttons[idx].component}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}