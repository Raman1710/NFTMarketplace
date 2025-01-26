import CollectionStat from '@/Components/CollectionStat/CollectionStat'
import Discover from '@/Components/DiscoverSection/Discover'
import LatestDrop from '@/Components/LatestDrop/LatestDrop'
import Newsletter from '@/Components/Newsletter/Newsletter'
import TrendingSection from '@/Components/TrendingSection/TrendingSection'
import React from 'react'

const Homepage = () => {
  return (
  
    <>
      <Discover/> 
      <CollectionStat/>
      <LatestDrop/>
      <TrendingSection/>
      <Newsletter/>
    </>
    
  )
}

export default Homepage