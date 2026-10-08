import React from 'react'
import Herohome from './homeSections/heroHome/Herohome'
import Onehomesection from './homeSections/oneHome/Onehomesection'

function Home({data}) {
  return (
    <>
    <Herohome/>
    <Onehomesection data={data} />
    
    </>
  )
}

export default Home