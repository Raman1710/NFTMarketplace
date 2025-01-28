import React from 'react'
import Logo from '@/assets/Logo.svg'
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ShoppingBag } from 'lucide-react';


const Header = () => {
    return (
        <div className='w-screen px-7 py-4 text-center'>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex justify-between items-center gap-11'>
                    <Link to='/'><img src={Logo} /></Link>
                    <div className='flex  gap-6'>
                        <Link to='/drop' className=' font-medium'>Drop</Link>
                        <Link to='/sell' className=' font-medium'>Sell</Link>
                        <Link to='/create' className=' font-medium'>Create</Link>
                    </div>
                </div>



                <div className="flex items-center gap-1 w-full max-w-lg py-0 px-10 !bg-[#f7f7ff] rounded-full shadow-sm">
                    <span className="text-gray-500">
                        <Search className="w-5 h-5" />
                    </span>
                    <Input
                        type="text"
                        placeholder="Search for collections, NFT or users"
                        className="flex-grow !bg-[#f7f7ff] text-gray-600 outline-0 !border-0 "
                    />
                    <span className="text-gray-400 bg-[#eae9ec] rounded-lg px-2 pb-1.5 text-sm font-medium">
                        /
                    </span>
                </div>



                <div className='flex gap-6'>
                    <div>
                        <Button className='!bg-primary !text-white rounded-full  border-2 border-primary hover:border-2 hover:!border-primary hover:!bg-white hover:!text-black transition-all'>Connect Wallet</Button>
                    </div>
                    <div>
                        <Button className='rounded  !bg-[#E7E9FF]'>
                            <ShoppingBag color='#3F4DFA' />
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header