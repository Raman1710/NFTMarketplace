import React from 'react'
import { Button } from '../ui/button'
import discover01 from '@/assets/discover01.svg'
import discover02 from '@/assets/discover02.svg'
import discover03 from '@/assets/discover03.svg'
import discover04 from '@/assets/discover04.svg'
import discover05 from '@/assets/discover05.svg'
import discover from '@/assets/discover.svg'

const Discover = () => {


  return (
    <div>

      <div className='px-7'>
        <div className='flex flex-col justify-center items-center mx-auto my-12 gap-6'>
          <h1 className='text-7xl font-bold flex flex-col justify-center items-center gap-4'>Discover <span>Limitless Creations</span></h1>
          <p className='flex flex-col justify-center items-center text-gray-800'>Unleash the Power of Digital Ownership <span>in the World of NFTs</span></p>
          <Button className='!bg-primary !text-white !rounded-full border-2 border-primary hover:border-2 hover:!border-primary hover:!bg-white hover:!text-black transition-all'>Get Started</Button>
        </div>

      <div className='max-h-[280px] flex flex-row  gap-5 overflow-x-hidden  '>
        {/* images */}
         <div className='overflow-hidden w-fit ' >
          <img src={discover01} className='w-[327px] h-[388px] ' />
        </div>
        <div className='overflow-hidden w-fit'>
          <img src={discover02} className='w-[327px] h-[388px] pt-12' />
        </div>
        <div className='overflow-hidden w-fit'>
          <img src={discover03} className='w-[327px] h-[388px]' />
        </div>
        <div className='overflow-hidden w-fit'>
          <img src={discover04} className='w-[327px] h-[388px] pt-12' />
        </div>  
         <div className='overflow-hidden w-fit'>
          <img src={discover05} className='w-[327px] h-[388px]' />
        </div> 

      </div>
      </div>
    </div>
  )
}

export default Discover