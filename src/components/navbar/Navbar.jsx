import React, { useState } from 'react'
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { Link, NavLink } from 'react-router-dom';
import { TbFileText } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";




function Navbar({data, setdata}) {
    const [modal,setmodal]=useState(false)
    const [img, setimg] = useState("")
    const [title, settitle] = useState("")
    const [price, setprice] = useState("")
    const [desc, setdeck] = useState("")
    return (
        <>
       <nav>
       <div className="container  w-[1200px] mx-auto flex items-center justify-between py-[15px]  ">
                <div className="nav_logo">
                    <Link to={"/"} ><img src="/imgs/Logo.svg" alt="" /></Link>
                </div>
                <div className="nav_input w-[370px] h-[56px]  relative ">
                    <input placeholder='Search' type="search" className='w-full h-full bg-[#F5F5F5] rounded-[8px]  pl-[40px] outline-none ' />
                    <CiSearch className='absolute  top-[20px] left-[15px] text-[20px] ' />

                </div>
                <ul className='flex items-center gap-[50px]'>
                    <li className=' text-[16px] font-medium text-[#000000] ' ><NavLink to={"/"} >Home</NavLink></li>
                    <li className=' text-[16px] font-medium text-[#000000] ' >About</li>
                </ul>
                <div className="nav_icon flex items-center gap-[24px]  ">
                    <div className="div w-[32px] h-[32px] flex items-center justify-center ">
                        <CiHeart className='text-[25px]' />
                    </div>
                    <div className="div w-[32px] h-[32px] flex items-center justify-center ">
                        <MdOutlineShoppingCart className='text-[25px]' />
                    </div>
                    <div className="div w-[32px] h-[32px] flex items-center justify-center ">
                        <LuUserRound className='text-[25px]' />
                    </div>
                </div>
                <div className="nav_btn">
                    <button className=' cursor-pointer w-[155px] h-[50px] bg-[#000000] text-white rounded-[8px] ' onClick={()=>{
                        setmodal(true)
                    }} >Add</button>
                </div>
            </div>
            {
          modal && <div className="modal fixed z-2 top-0  left-0 w-full h-screen content-center flex items-center justify-center bg-white left-0">
            <div className="box">
              <div className="info text-center w-[500px] pb-[40px] text-[28px] font-bold">
                <h2>Create</h2>
              </div>
              <div className=" px-[40px] py-[60px] shadow w-[500px] h-[450px] bg-[#F2F2F2FF] rounded-[10px] ">
                <form action="" className='flex flex-col gap-[20px]' onSubmit={(e) => {
                  e.preventDefault()
                  const obj = {
                    id: Math.floor(Math.random() * 9999),
                    img: img,
                    title: title,
                    price: price,
                    desc: desc,
                    imgs:[
                        "https://cdn.mediapark.uz/imgs/a04a6c68-9f7d-4e31-a1ca-607a69610b7f_Artboard-1.webp",
                        "https://cdn.mediapark.uz/imgs/2bf3a8f2-1dae-43f2-bce2-4254fd59540a_Artboard-2.webp",
                        "https://fotera.by/pics/items/sdhdgmgfkgh.jpg",
                        "https://cdn.mediapark.uz/imgs/c36ca387-d4f5-4d80-8996-86cd8165453a_Artboard-11.webp",
                       ],
                  }
                  setdata([...data, obj])
                  setimg('')
                  settitle('')
                  setprice('')
                  setdeck('')
                  setmodal(false)
                }} >
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px] ' >
img:</label>
                    <input required onInput={(e) => {
                      setimg(e.target.value)
                    }} placeholder='Img' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                  </div>
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]' >title:</label>
                    <input required onInput={(e) => {
                      settitle(e.target.value)
                    }} placeholder='Title' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                  </div>
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]' >price:</label>
                    <input required onInput={(e) => {
                      setprice(e.target.value)
                    }} placeholder='Price' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px]' type="number" />
                  </div>
                  <div className="input flex items-center gap-[10px]  ">
                    <label className='capitalize w-[40px]   ' > 
desc:</label>
                    <input required onInput={(e) => {
                      setdeck(e.target.value)
                    }} placeholder='Desc' className=' rounded-[4px] outline-none pl-[10px]  bg-white  w-[90%] h-[45px] ' type="text" />
                    
                  </div>
                  <div className="btn pt-[40px] flex items-center justify-between " >
                  <button  onClick={()=>{
                    setmodal(false)
                  }} className=' transition-all duration-300 ease-in-out  border w-[150px]  h-[40px]  cursor-pointer rounded-[5px] text-gray-600 text-center hover:bg-red-600 hover:text-white ' type='button' >Cancel</button>
                    <button type='submit' onClick={() => {

                    }} className=' transition-all duration-300 ease-in-out border w-[150px]  h-[40px] cursor-pointer rounded-[5px] text-gray-600 text-center hover:bg-green-600 hover:text-white ' >Add</button>
                    
                  </div>

                </form>
              </div>
            </div>
          </div>
        }
       </nav>

        </>
    )
}

export default Navbar