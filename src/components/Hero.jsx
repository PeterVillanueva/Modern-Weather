import React from 'react'

function Hero() {
  return (
      <div className='flex px-[240px] py-[45px] justify-center items-center gap-2.5 '>
        <div className='w-[778px] text-center'>
          <span className='text-white text-[40px] font-medium leading-65px '>Seeing the weather of the whole world with </span>
          <span className='text-cyan-100 text-[40px] font-bold leading-65px'>Modern Weather!</span>
        </div>
      </div>
  );
}

export default Hero

{/*
import React from 'react'

function Hero() {
  return (
      <div className='px-[240px] py-[45px] justify-start items-start gap-2.5 inline-flex'>
        <div className='w-[778px] text-center'>
          <span className='text-white text-[40px] font-medium leading-65px '>Seeing the weather of the whole world with </span>
          <span className='text-cyan-100 text-[40px] font-bold leading-[65px]'>Modern Weather!</span>
        </div>
      </div>
  );
}

export default Hero
*/}