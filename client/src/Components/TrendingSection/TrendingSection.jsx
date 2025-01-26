import React from 'react'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
import Cards from '../Card/Cards'
const TrendingSection = () => {
  return (
    <div className='w-full mx-7 '>
            <div>
                <p className='font-bold text-xl'>Trending in Categories</p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
                <Button className='border-2 border-primary bg-[#f7f7ff]'>Art </Button>
                <Button className='border-2 border-primary bg-[#f7f7ff]'>Collectibles</Button>
                <Button className='border-2 border-primary bg-[#f7f7ff]'>Music</Button>
                <Button className='border-2 border-primary bg-[#f7f7ff]'>Photography</Button>
                <Button className='border-2 border-primary bg-[#f7f7ff]'>Video</Button>
                <Button className='border-2 border-primary bg-[#f7f7ff]'>Sport</Button>
            </div>
            <div className='flex flex-row flex-wrap gap-10   my-8 '>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
            <div className=' mt-8 mb-14 flex flex-row justify-center'>
                <Button className='border-2 border-primary rounded-full'>
                    See all in Art   <MoveRight />
                </Button>
            </div>
    </div>
  )
}

export default TrendingSection