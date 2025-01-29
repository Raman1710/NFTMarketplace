import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Separator } from "@/components/ui/separator"
import { Button } from '../ui/button'

const Filters = () => {
    const [openIndex, setOpenIndex] = useState(null); 

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); 
    };

    const collapsibleData = [
        {
            name: "Type of Artwork",
            content: [
                { content: "Music", htmlFor: "music" },
                { content: "Image", htmlFor: "image" },
                { content: "Video", htmlFor: "video" },
                { content: "Gif", htmlFor: "gif" },
            ]
        },
        {
            name: "Type of File",
            content: [
                { content: "Image", htmlFor: "image" },
                { content: "Video", htmlFor: "video" },
                { content: "Gif", htmlFor: "gif" },
            ]
        },
        {
            name: "Type of Token",
            content: [
                { content: "Single", htmlFor: "single" },
                { content: "Multiple", htmlFor: "multiple" }
            ]
        },
        {
            name: "Type of Blockchain",
            content: [
                { content: "ETH", htmlFor: "eth" },
                { content: "BSC", htmlFor: "bsc" },
                { content: "Polygon", htmlFor: "polygon" }
            ]
        }
    ];

    return (
        <div className='w-[256px] flex flex-col h-full bg-red-d200'>

            {/* Min and max price */}
            <div className='flex flex-row justify-around overflow-y-hidden'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-700 font-semibold'>MIN PRICE</p>
                    <Input placeholder='0 ETH' className='w-[100px] outline-none focus:border-gray-400 rounded-lg' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-700 font-semibold'>MAX PRICE</p>
                    <Input placeholder='0 ETH' className='w-[100px] outline-none focus:border-gray-400 rounded-lg' />
                </div>
            </div>

            {/* Types filter */}
            <div className='my-6'>
                {collapsibleData.map((item, index) => (
                    <div key={index}>
                        <Collapsible open={openIndex === index} onOpenChange={() => handleToggle(index)}>
                            <CollapsibleTrigger 
                                className='py-1 px-2 w-full flex flex-row justify-between items-center' 
                                onClick={() => handleToggle(index)}
                            >
                                <p className='font-bold text-gray-700'>{item.name}</p> 
                                {openIndex === index ? <ChevronDown /> : <ChevronUp />}
                            </CollapsibleTrigger>

                            <CollapsibleContent className='flex flex-col my-3 mx-7'>
                                {item.content.map((subItem, subIndex) => (
                                    <div key={subIndex} className='flex gap-2 my-3'>
                                        <Checkbox id={subItem.htmlFor} className='overflow-y-hidden' />
                                        <Label htmlFor={subItem.htmlFor} className='overflow-y-clip font-medium cursor-pointer'>
                                            {subItem.content}
                                        </Label>
                                    </div>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                        <Separator className='mb-3' />
                    </div>
                ))}

                <div className='flex flex-col gap-2'>
                    <Button className='rounded-full bg-primary hover:text-black hover:bg-white hover:border-2 hover:border-primary'>
                        Apply
                    </Button>
                    <Button className='rounded-full !bg-white text-black border-2'>
                        Clear all
                    </Button>
                </div>
            </div>

        </div>
    );
}

export default Filters;
