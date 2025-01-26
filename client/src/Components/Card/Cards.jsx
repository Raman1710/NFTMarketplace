import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card"


import React from 'react'
import CardPic from '@/assets/CardDemoPic.svg'
import Avatar from '@/assets/Avatar.svg'
import { Ellipsis } from 'lucide-react';



const Cards = () => {
    return (
        <>
            <Card className=' bg-white w-1/6 border-[#cac6d2] text-black   '>
                <CardHeader className='w-full p-0'>
                    <img src={CardPic} className="w-full rounded-sm object-cover" />
                </CardHeader>
                <CardContent className='p-0 border-b-2'>
                    <div className="p-1 flex flex-col gap-2 w-full">
                        <div className="flex flex-row justify-between">
                            <p className=" font-bold ">Item Name</p>
                            <Ellipsis />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row justify-between gap-1">
                                <img src={Avatar} />
                                <p className=" font-semibold">@Author</p>
                            </div>
                            <div>
                                1 of 1
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className=' px-4  p-3'>
                    <div className="flex flex-col gap-1">
                        <p className="text-[#6d667f]">Reserve price</p>
                        <p className="font-bold text-2xl">0.5 ETH</p>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}

export default Cards



