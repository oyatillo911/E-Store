import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Onehomesection({data, setdata}) {
 
    return (
        <>
            <div className="container  w-[1200px] mx-auto py-[55px] ">
                <div className="info">
                    <h2 className='text-[#000000] text-[18px] font-medium' >New Arrival</h2>
                </div>
                <div className="box w-full pt-[32px] flex items-center gap-[16px] flex-wrap  ">
                   {
                    data?.map((item,i)=>{
                        return  <div  key={i}  className="group w-[24%] h-[430px]  bg-[#F6F6F6] text-center px-[16px]  py-[25px] rounded-[9px]  transition-all duration-300 ease-in-out  hover:bg-white hover:border border-blue-100
                        ">
                       <div className="h-[50px] w-full">
                       <div className="icon flex items-start justify-between pb-[10px]  ">
                            <div className="heart w-[40px] h-[40px] bg-[#F6F6F6] rounded-[50%] items-center justify-center cursor-pointer hidden group-hover:flex transition-all duration-300 ease-in-out
 ">
                            <CiHeart className='text-[28px] text-[#909090C4]  ' />
                            </div>
                       <div className="trash w-[40px] h-[40px] bg-[#F6F6F6] rounded-[50%] items-center justify-center cursor-pointer    hidden group-hover:flex transition-all duration-300 ease-in-out
 ">
                            < FaTrash onClick={()=>{
                                const deleteData = data.filter((info)=>{
                                    return info.id !== item.id
                                })
                                setdata(deleteData)
                            }} className='text-[20px] text-[#909090C4] hover:text-red-500 transition-all duration-300 ease-in-out  ' />
                            </div>
                             
                        </div>
                       </div>
                       
                        <div className="cards_logo  mx-auto w-[160px] h-[160px]  ">
                            <img loading="lazy" className='w-full h-full mx-auto' src={item.img} alt="" />
                        </div>
                        <div className="info  pt-[15px]  pb-[25px] ">
                            <h2 className='font-medium  text-[15px] h-[23px] '> {item.title} </h2>
                            <h2 className='font-medium  text-[15px] h-[23px] '  >{item.info}</h2>
                            <span className='text-[#000000] text-[24px] font-semibold pt-[16px] ' >${item.price}</span>
                        </div>
                        <Link to={`/detail/${item.id}`}  className="btn   ">
                            <button  className=' cursor-pointer rounded-[8px] bg-[#000000] w-[190px] h-[50px] text-white  ' >Buy Now</button>
                        </Link>
                    </div>
                    })
                   }
                </div>
            </div>
        </>
    )
}

export default Onehomesection