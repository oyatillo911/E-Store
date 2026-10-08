import React from 'react'

function Herohome() {
  return (
    <>
    <div className="hero  bg-[#211C24] ">
<div className="container  w-[1200px] mx-auto  flex items-center justify-between">
    <div className="info">
        <span  className='text-[#FFFFFF] text-[25px] font-semibold '>Pro.Beyond.</span>
        <h2 className='font-thin  text-[96px] text-[#FFFFFF] ' >IPhone 14 <span className='font-bold' >Pro</span></h2>
        <p className=' py-[25px] text-[#909090]'>Created to change everything for the better. For everyone</p>
        <div className="btn">
            <button  className=' w-[190px] h-[55px] rounded-[6px] text-white border border-[#FFFFFF]  '>Shop Now</button>
        </div>
    </div>
    <div className="hero_logo">
        <img src="/imgs/hero_logo.svg" alt="" />
    </div>
</div>
    </div>
    
    </>
  )
}

export default Herohome