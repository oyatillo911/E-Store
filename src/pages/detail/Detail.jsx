
import { Button } from "@mui/material";
import { useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";


function Detail({ data }) {
    const { id } = useParams()
    const filterinfo = data.find((item) => {
        return item.id == id
    })

    const [number, setnumber] = useState(1)
    const totalPrice = filterinfo.price * number
    const [mainImg, setmainImg] = useState(filterinfo.img)
    return (
        <>
            <section>
                <div className="container w-[1200px] mx-auto  ">
                    <div className="info  flex items-center gap-[16px] py-[40px] ">
                        <h2 className="font-medium  text-[16px] text-[#A4A4A4] " >Home</h2>
                        <div className="flex items-center justify-center w-[24px] h-[24px]">
                            <IoChevronForwardSharp className="text-[15px] text-[#A4A4A4]" />
                        </div>
                        <h2 className="font-medium  text-[16px] text-[#A4A4A4] " >Catalog</h2>
                        <div className="flex items-center justify-center w-[24px] h-[24px]">
                            <IoChevronForwardSharp className="text-[15px] text-[#A4A4A4]" />
                        </div>
                        <h2 className="font-medium  text-[16px] text-[#A4A4A4] " >Smartphones</h2>
                        <div className="flex items-center justify-center w-[24px] h-[24px]">
                            <IoChevronForwardSharp className="text-[15px] text-[#A4A4A4]" />
                        </div>
                        <h2 className="font-medium  text-[16px] text-[#A4A4A4] " >Apple</h2>
                        <div className="flex items-center justify-center w-[24px] h-[24px]">
                            <IoChevronForwardSharp className="text-[15px] text-[#A4A4A4]" />
                        </div>
                        <h2 className="font-medium  text-[16px] text-[#000000] " >iPhone 14 Pro Max</h2>
                    </div>
                    <div className="box flex items-center justify-between py-[100px] ">
                        <div className="logo w-[48%] flex items-center justify-between">
                            <div className="w-[15%] flex items-start flex-col gap-[10px] ">
                                {
                                    filterinfo.imgs.map((item) => {
                                        return <div className="small_img  w-full cursor-pointer h-[80px] " onClick={() => {
                                            setmainImg(item)
                                        }}>
                                            <img className="w-full h-full" src={item} alt="" />
                                        </div>
                                    })
                                }
                            </div>

                            <div className="main_img w-[75%] h-[413px] ">
                                <img className="w-full h-full " src={mainImg} alt="" />
                            </div>

                        </div>
                        <div className="info w-[48%] ">
                            <h1 className="text-[40px] font-bold text-[#000000]" >{filterinfo.title}</h1>
                            <div className="price  flex items-center gap-[15px]">
                                <span className="font-medium text-[32px] text-[#000000] " >${filterinfo.price}</span>
                              
                            </div>
                            <div className="desc">
                                <p className="font-normal text-[14px] text-[#6C6C6C]" > {filterinfo.desc}</p>
                            </div>
                            <div className="one_btn w-full  flex items-center justify-between pt-[32px] ">
                                <Button variant="outlined" sx={{
                                    width: "49%",
                                    height: "55px",
                                    background: "#FFFFFF",
                                    border: "1px solid #000000",
                                    borderRadius: "6px",
                                }} ><span className="text-[#000000]">Add to Wishlist</span></Button>
                                <Button variant="contained" sx={{
                                    width: "49%",
                                    height: "55px",
                                    background: "#000000",
                                    borderRadius: "6px",
                                }} ><span className="text-white">Add to Cart</span></Button>

                            </div>
                            <div className="btns flex items-center   justify-between ">

                           
                            <div className="total_price  flex  items-start gap-[5px] pt-[32px]  ">
                                <div className="div    flex items-center justify-center  ">
                                <h1 className="text-[24px]">Total Price:</h1>
                                </div>
                              <div className="div   flex items-center justify-center">
                              <h2 className=" text-[22px] font-normal pt-[4px] text-green-500 " >{totalPrice}$</h2>
                              </div>
                               </div>
                               <div className="plus_btn flex items-center  pt-[32px]">
                                <div onClick={() => {
                                    if (number > 1) {
                                        setnumber(number - 1)
                                    }
                                }} className="minus   w-[40px] h-[44px] flex items-center justify-center border-[1px] border-[#00000080]  border-solid rounded-l-[4px] cursor-pointer  ">
                                    <span className="text-[35px]" >-</span>
                                </div>
                                <div className="minus w-[80px] h-[44px] flex items-center justify-center border-t-[1px] border-b-[1px] border-solid border-[#00000080]  ">
                                    <span className="text-[20px] font-medium text-[#000000]">{number}</span>
                                </div>
                                <div onClick={() => {
                                    setnumber(number + 1)
                                }} className="plus  w-[40px] h-[44px] flex items-center justify-center border-[1px] border-[#00000080] border-solid  rounded-r-[4px] cursor-pointer ">
                                    <span className="text-[20px] w-full  h-full text-center content-center " >+</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Detail