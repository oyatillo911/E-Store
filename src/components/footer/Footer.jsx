import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-[#000000] py-[100px]'>
<div className="container w-[1200px] mx-auto ">
<div className="box  flex items-start justify-between ">
  <div className="cards">
    <div className="logo">
      <img src="/imgs/footer_logo.svg" alt="" />
    </div>
    <div className="info pt-[25px] ">
      <p className=' text-[#CFCFCF] text-[14px] font-medium  w-[60%]' >We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
    </div>
  </div>
<div className="cards  flex items-center gap-[250px]">
<ul className='flex flex-col gap-[10px]' >
    <h1 className=' text-[#FFFFFF] text-[16px] font-semibold ' >Services</h1>
    <li><a className=' text-[#CFCFCF] text-[14px] font-normal ' href="">Bonus program</a></li>
    <li><a className=' text-[#CFCFCF] text-[14px] font-normal ' href="">Gift cards</a></li>
    <li><a className=' text-[#CFCFCF] text-[14px] font-normal ' href="">Credit and payment</a></li>
    <li><a className=' text-[#CFCFCF] text-[14px] font-normal ' href="">Service contracts</a></li>
    <li><a className=' text-[#CFCFCF] text-[14px] font-normal ' href="">Non-cash account</a></li>
    <li><a className=' text-[#CFCFCF] text-[14px] font-normal ' href="">Payment</a></li>
  </ul>
  <ul className=' flex flex-col gap-[10px] ' >
    <h1 className=' text-[#FFFFFF] text-[16px] font-semibold ' >Assistance to the buyer</h1>
    <li><a className='text-[14px] text-[#CFCFCF] font-normal' href="">Find an order</a></li>
    <li><a className='text-[14px] text-[#CFCFCF] font-normal' href="">Terms of delivery</a></li>
    <li><a className='text-[14px] text-[#CFCFCF] font-normal' href="">Exchange and return of goods</a></li>
    <li><a className='text-[14px] text-[#CFCFCF] font-normal' href="">Guarantee</a></li>
    <li><a className='text-[14px] text-[#CFCFCF] font-normal' href="">Frequently asked questions</a></li>
    <li><a className='text-[14px] text-[#CFCFCF] font-normal' href="">Terms of use of the site</a></li>
  </ul>
</div>
</div>
</div>
      </footer>
    </>
  )
}

export default Footer