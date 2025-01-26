import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import NewsletterPic from '@/assets/newsletterPic.svg'

const Newsletter = () => {
  return (
    <div className=' px-8 py-16'>
      <div className='bg-[#e7e9ff] flex flex-row justify-center px-12 py-24 rounded-2xl '>
        <div>
          {/* image */}
          <img src={NewsletterPic} />
        </div>
        <div className=' py-20 pl-28 flex flex-col gap-10'>
          <div className='flex flex-col gap-4  '>
            <p className=' text-3xl font-bold overflow-y-hidden'>Stay in the Loop, Unlock Exculsive Content!</p>
            <p className=' text-md flex flex-col'>Subscribe to Our Newsletter for the Latest NFT Drops, Artist Features,  <span>and Exclusive Offers</span> </p>
          </div>

          <div className='flex flex-col justify-center gap-2'>
            <div className='flex flex-row gap-2  '>
              <Input placeholder='Your email' className='w-[472px] outline-none'></Input>
              <Button className='rounded-full !bg-primary !text-white  '>Subscribe</Button>
            </div>
            <div className='w-[472px]'>
              <p className=' text-sm text-[#494455]'>By clicking send, you'll get emails from ByteCraft occasionally. You can unsubscribe anytime by clicking the link in any email.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Newsletter