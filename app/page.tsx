'use client'
import { useState } from "react"
import Header from '../components/Header'
import Landing from '../components/Landing'

export default function Home() {
  const [y, setY] = useState<number>(50)
  const [x, setX] = useState<number>(50);
  const [keyMap, setKeyMap] = useState()
  // const [speed, setSpeed] = useState<number>(10);
  const [angle, setAngle] = useState<number>(0);
  // const [moveAngle, setMoveAngle] = useState<number>(0);

  // useEffect(() => {
  //   window.addEventListener('keydown', keyHandler);
  //   return () => {
  //     window.removeEventListener('keydown', keyHandler);
  //   }
  // });

  // const keyHandler = (e: KeyboardEvent) => {
  //  let speed = 0
  //  let moveAngle = 0
  //  if (e.key === "ArrowLeft") {moveAngle = -10;}
  //  if (e.key === "ArrowRight") {moveAngle = 10;}
  //  if (e.key === "ArrowUp") {speed = 5;}
  //  if (e.key === "ArrowDown") {speed = -5;}
  //  setAngle(angle + (moveAngle * Math.PI / 180))
  //  setX(x + (speed * Math.sin(angle)))
  //  setY(y - (speed * Math.cos(angle)))
  // }


  return (
    <div>
      {/* Header */} 
      {/* <Image 
        style={{
          position: "absolute",
          top: `calc(${y}px)`,
          left: `calc(${x}px)`, 
          width: "50px",
          height: "50px",
          rotate: `${angle}rad`,
          // backgroundColor: 'aliceblue',
          // borderRadius: "5px",
          zIndex: 100,
          transition: "ease"
        }}
        src={wink}
        alt="wink"
      />     */}
      <Header/>

      {/* Landing */}
      <Landing />
    </div>
  )
}
