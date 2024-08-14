"use client";
import Image from 'next/image'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
 
 const mobileImges=[
  {src:"/assets/images/iphone_01.png" ,title:"Audio 01", speed:10},
  {src:"/assets/images/iphone_02.png" ,title:"Audio 02", speed:20},
  {src:"/assets/images/iphone_03.png" ,title:"Audio 03", speed:10},
  {src:"/assets/images/iphone_04.png" ,title:"Audio 04", speed:20},
  {src:"/assets/images/iphone_05.png" ,title:"Audio 05", speed:10},
 ]
 const MobileGallary = () => {

   return (

    <ParallaxProvider>
   <div className='flex  gap-8 mx-auto justify-center align-middle overflow-hidden h-[38rem] max-w-[1650px] '>
    {mobileImges.map(({src , title , speed} , index)=>(
      <Parallax speed={speed} key={index}>
      <Image src={src} alt={title} width={278} height={576}/>
      </Parallax>
    ))}
   </div>
   </ParallaxProvider>
   )
 }
 
 export default MobileGallary