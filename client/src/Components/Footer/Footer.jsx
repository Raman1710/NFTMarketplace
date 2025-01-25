import React from 'react'
import Logo from '@/assets/Logo.svg'
import Insta from '@/assets/Insta.svg'
import LinkedIn from '@/assets/LinkedIn.svg'
import Telegram from '@/assets/Telegram.svg'
import Twitter from '@/assets/Twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-screen p-7 text-center'>
            <div className='flex flex-row justify-between'>
                <div>
                    <img src={Logo} />
                </div>

                <div className='flex flex-row justify-between items-center gap-9 outline-none'>
                    <Link className=' font-medium hover:underline hover:decoration-[#3F4DFA] '>Blog</Link>
                    <Link className=' font-medium hover:underline hover:decoration-[#3F4DFA]'>Cookie Policy</Link>
                    <Link className=' font-medium hover:underline hover:decoration-[#3F4DFA]'>Help</Link>
                    <Link className=' font-medium hover:underline hover:decoration-[#3F4DFA]'>About</Link>
                    <Link className=' font-medium hover:underline hover:decoration-[#3F4DFA]'>Terms&Conditions</Link>
                    <Link className=' font-medium hover:underline hover:decoration-[#3F4DFA]'>Privacy</Link>
                </div>

                <div className='flex flex-row justify-between items-center gap-4  '>
                    <img src={Insta} alt="Instagram" className="w-6 h-6" />
                    <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                    <img src={Telegram} alt="Telegram" className="w-6 h-6" />
                    <img src={Twitter} alt="Twitter" className="w-6 h-6" />

                </div>
            </div>

        </div>
    )
}

export default Footer