import React from 'react'
import { Button } from '../ui/button'
import { Hash } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ChevronsUpDown } from 'lucide-react';
import { MoveRight } from 'lucide-react';





const CollectionStat = () => {
    return (
        <div className='px-7 mt-[100px]'>
            <div className=' font-bold text-xl'>
                Collection Stats
            </div>

            <div className='flex flex-row  justify-between mt-8 '>
                <div className='flex gap-4'>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>Trending</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>Top</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>Watchlist</Button>
                </div>

                <div className='flex gap-4'>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>1h</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>6h</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>24h</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>7d</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>30d</Button>
                    <Button className='border-2 border-primary bg-[#f7f7ff]'>All</Button>
                </div>


            </div>

            <div className='mt-4 bg-[f7f7ff]'>
                <div className='flex flex-row justify-between'>
                    <Button className=''><Hash />Collection</Button>
                    <Button>Volume    <ChevronDown /></Button>
                    <Button>Change     <ChevronsUpDown /></Button>
                    <Button>Floor price <ChevronsUpDown /></Button>
                    <Button>Sales</Button>
                </div>

                <div>
                    {/* list of trending nfts */}
                </div>
            </div>

            <div className=' mt-8 mb-14 flex flex-row justify-center'>
                <Button className='border-2 border-primary rounded-full'>
                    See more stats   <MoveRight />
                </Button>
            </div>
        </div>
    )
}

export default CollectionStat