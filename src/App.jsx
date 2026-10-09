import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Detail from './pages/detail/Detail'

function App() {
  const [data,setdata]=useState([
    {
      id:1,
      img:"/imgs/Iphone 14.svg",
      title:"Apple iPhone 14 Pro Max",
      desc:"Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...",
      info:"128GB Deep Purple",
      price:"900",
      imgs:[
        "https://cdn.mediapark.uz/imgs/6e1206f9-6cfa-4c7a-84aa-947bf741d9dc_1.webp","https://cdn.mediapark.uz/imgs/ec765c5e-f167-4a81-8b70-6e463b3d8eb6_2.webp","https://cdn.mediapark.uz/imgs/b1dccd23-04a5-4425-9d88-bb442e17604c_73299a62-d2c6-4e9c-9e2f-44782d0c8936_position_9_RU-DEV.webp","https://cdn.mediapark.uz/imgs/c2112605-8f8e-4679-8fd7-34734c0e7731_1.webp"
      ],
    },
    {
      id:2,
      img:"/imgs/one_logo2.svg",
      title:"Blackmagic Pocket Cinema ",
      desc:" людей можно разделить на два типа: тех, кто серьезно занимается съемкой видео, и тех, кто ничего не слышал  BMPCC 4K/6K и BRAW. Автор материала является давним пользователем и безусловным поклонником подхода компании Blackmagic Design  ",
      info:"Camera 6k",
      price:"2535",
      imgs:[
       "https://cdn.mediapark.uz/imgs/a04a6c68-9f7d-4e31-a1ca-607a69610b7f_Artboard-1.webp",
       "https://cdn.mediapark.uz/imgs/2bf3a8f2-1dae-43f2-bce2-4254fd59540a_Artboard-2.webp",
       "https://fotera.by/pics/items/sdhdgmgfkgh.jpg",
       "https://cdn.mediapark.uz/imgs/c36ca387-d4f5-4d80-8996-86cd8165453a_Artboard-11.webp",
      ],
    },
    
  ])
  return (
    <>
    <BrowserRouter>
    <Navbar data={data} setdata={setdata} />
    <Routes>
<Route path='/' element={<Home data={data}  />} />
<Route path='/detail/:id'  element={<Detail data={data} />} />


    </Routes>
    <Footer/>
    
    </BrowserRouter>
    
    </>
  )
}

export default App