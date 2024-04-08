import React from 'react'
import {motion} from 'framer-motion';

const TransitionEffect = () => {
  return (
    // create 3 dive which will move right to left with transition effect
   <>
   <motion.div className='fixed top-0 bottom-0 right-[0%] w-screen h-screen z-30 bg-primary dark:bg-primaryDark'
   initial={{x:"0%", width:"100%"}}
   animate={{x:"100%" , width:"0%"}}
   exit={{x:["100%","0%"], width:["0%", "100%"]}}
   transition={{duration:0.8, ease:"easeInOut"}}/>
    <motion.div className='fixed top-0 bottom-0 right-[0%] w-screen h-screen z-20 bg-light'
   initial={{x:"0%", width:"100%"}}
   animate={{x:"100%" , width:"0%"}}
   exit={{x:["100%","0%"], width:["0%", "100%"]}}
   transition={{delay:0.2,duration:0.8, ease:"easeInOut"}}/>
    <motion.div className='fixed top-0 bottom-0 right-[0%] w-screen h-screen z-10 bg-dark'
   initial={{x:"0%", width:"100%"}}
   animate={{x:"100%" , width:"0%"}}
   exit={{x:["100%","0%"], width:["0%", "100%"]}}
   transition={{delay:0.4,duration:0.8, ease:"easeInOut"}}/>
   </>
   
  )
}

export default TransitionEffect
