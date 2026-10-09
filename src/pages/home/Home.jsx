import React from 'react'
import Herohome from './homeSections/heroHome/Herohome'
import Onehomesection from './homeSections/oneHome/Onehomesection'

function Home({data, setdata}) {
  return (
    <>
    <Herohome/>
    <Onehomesection data={data} setdata={setdata} />
    
    </>
  )
}

export default Home