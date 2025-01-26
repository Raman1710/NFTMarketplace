import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout