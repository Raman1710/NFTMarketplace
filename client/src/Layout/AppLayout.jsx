import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const AppLayout = () => {
  return (
    <>
    <main className='overflow-hidden'>
        <Header/>
        <Outlet/>
    </main>

    <Footer/>
   </>
  )
}

export default AppLayout