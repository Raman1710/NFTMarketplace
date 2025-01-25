import React from 'react'
import Cards from '../Card/Cards.jsx'
const LatestDrop = () => {
  return (
    <div className='px-7'>
        <div>
            <p className='font-bold text-xl'>Latest Drops</p>
            <div className='flex flex-row flex-wrap gap-4 justify-center'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>

            </div>
        </div>
    </div>
  )
}

export default LatestDrop