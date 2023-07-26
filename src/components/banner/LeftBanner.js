import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

  return (
    <section id='home' className='w-full py-20 items-center flex border-b-[1px] font-titleFont border-b-black'>
       <div className='w-1/2 flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
          <h1 className='text-6xl font-bold text-white'>
            Hi, I'm {" "}
            <span className="text-designColor capitalize">Venkatesh B</span>
            </h1>
            <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
          </h2>
            <p className="text-base font-bodyFont leading-6 tracking-wide">Dynamic and results-driven Full Stack Developer with a passion for creating visually appealing, user-friendly, and effective websites. Seeking to leverage my versatile technical skills, creative problem-solving abilities, and passion for delivering exceptional user experiences, while continuously learning and growing professionally.
            </p>
        </div>
        <div>
          FIND ME IN
        </div>
       </div>
       <div className='w-1/2'></div>
    </section>
  )
}

export default LeftBanner