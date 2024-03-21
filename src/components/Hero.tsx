'use client'
import React, { useRef } from 'react'
import gsap, { random } from "gsap";
import { useGSAP } from "@gsap/react";
import Bounded from './Bounded';
import Shapes from './Shapes'

const Hero = () => {
  const container = useRef<HTMLDivElement>(null); 
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
const tl=gsap.timeline();
tl.fromTo('.name-animation',{
  x:-100,
  opacity:0,
  rotate:-10,
},
  {
    x:0,
    opacity:1,
    rotate:0,
    ease:"elastic.out(1,0.3)",
    duration:1,
    transformOrigin:"left top",
    stagger:{
      each:0.1,
      from:'random',
    }
}
);
tl.fromTo(".job-title",{
  y:20,
  opacity:0,
  scale:1.2,
},
  {
  opacity:1,
  y:0,
  duration:1,
  scale:1,
  ease:"elastic.out(1,0.3)",
  }
)
  
  }, { scope: container }); 
    const renderLetters=(name:string,key:string)=>{
        return name.split("").map((letter,index)=>(
            <span
            key={index}
            className={`name-animation name-animation-${key} inline-block opacity-0`}
            >
              {letter}
            </span>
        ));
    }
  return (
    <Bounded ref={container}>
    <div  className='grid min-h-[70vh] cols-1 md:grid-cols-2 items-center'>
       <Shapes/>
        <div className='col-start-1 md:row-start-1'>
       <div className=' mb-8 text-[clamp(3rem,15vmin,20rem)] font-extrabold leading-none tracking-tighter' >
        <div className='text-slate-300'>
          {renderLetters('Andy','first')}
          </div>
        <div className='-mt-[.2rem] text-slate-500'>
        {renderLetters('Bryant','second')}
        </div>
        <div className='job-title mt-6 bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2rem] text-transparent opacity-0 md:text-4xl'>Creative developer</div>
        </div>
    </div>
    </div>
    </Bounded>
  )
}
export default Hero;
