import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function Onehomesection({data}) {
    return (
        <>
            <div className="container  w-[1200px] mx-auto py-[55px] ">
                <div className="info">
                    <h2 className='text-[#000000] text-[18px] font-medium' >New Arrival</h2>
                </div>
                <div className="box w-full pt-[32px] flex items-center gap-[16px] flex-wrap  ">
                   {
                    data?.map((item,i)=>{
                        return  <Link  to={`/detail/${item.id}`} key={i}  className="cards w-[24%] h-[419px]  bg-[#F6F6F6] text-center px-[16px]  py-[25px] rounded-[9px] ">
                        <div className="ico flex items-start justify-end pb-[10px] ">
                            <CiHeart className='text-[28px] text-[#909090C4] ' />

                        </div>
                        <div className="cards_logo  mx-auto w-[160px] h-[160px]  ">
                            <img className='w-full h-full mx-auto' src={item.img} alt="" />
                        </div>
                        <div className="info  pt-[15px]  pb-[25px] ">
                            <h2 className='font-medium  text-[15px] h-[23px] '> {item.title} </h2>
                            <h2 className='font-medium  text-[15px] h-[23px] '  >{item.info}</h2>
                            <span className='text-[#000000] text-[24px] font-semibold pt-[16px] ' >${item.price}</span>
                        </div>
                        <div className="btn">
                            <button className=' cursor-pointer rounded-[8px] bg-[#000000]  text-white w-[190px] h-[50px]' >Buy Now</button>
                        </div>
                    </Link>
                    })
                   }
                </div>
            </div>
        </>
    )
}

export default Onehomesection