import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Profile = ({ name, avatar, cover, bio, children }) => {
    return (
        <div className=' px-8 flex flex-col gap-6'>
            <div className='relative'>
                <img src={cover} alt='Cover Image' className=' w-screen ' />
                <Avatar className = 'w-52 h-52 ml-16 bottom-28'>
                    <AvatarImage src= {avatar} className='' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <div className='flex flex-row justify-between items-center mt-[-100px]'>
            <div className='mdt-[-100px] ml-16 flex flex-col gap-4 '>
                <p className='text-4xl font-bold leading-10 overflow-y-clip pb-1 '>{name}</p>
                <p className='text-base text-[#24222A] w-[600px] text-wrap text-justify'>{bio}</p>
            </div>

            {children && <div>{children}</div>}

            </div>

        </div>
    )
}

export default Profile