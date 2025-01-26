import React from 'react'
import Cards from '../Card/Cards.jsx'
import { Button } from '../ui/button.jsx'
import { MoveRight } from 'lucide-react';


const LatestDrop = () => {
  return (
    <div className='px-7 w-fit overflow-hidden  '>
      <div>
        <p className='font-bold text-2xl'>Latest Drops</p>
        <div className='flex flex-row flex-wrap gap-8 justify-between my-8'>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className=' mt-8 mb-14 flex flex-row justify-center'>
          <Button className='border-2 border-primary rounded-full'>
            View all drops   <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LatestDrop