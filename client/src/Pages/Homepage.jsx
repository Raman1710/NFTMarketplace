import CollectionStat from '@/Components/CollectionStat/CollectionStat'
import Discover from '@/Components/DiscoverSection/Discover'
import LatestDrop from '@/Components/LatestDrop/LatestDrop'
import React from 'react'

const Homepage = () => {
  return (
  
    <>
      <Discover/>
      <CollectionStat/>
      <LatestDrop/>
    </>
    
  )
}

export default Homepage