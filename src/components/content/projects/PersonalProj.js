import React, { useState } from 'react'
import expenses_img from "./expenses_img.png"
import swiggy_clone_img from "./swiggy-clone-img.png"
import youtube_clone_img from "./youtube-clone-img.png"
import { GrPrevious, GrNext } from "react-icons/gr";
import "./Projects.css"

const PersonalProj = () => {
    const [activeTab, setActiveTab] = useState(1)

    const data = [
        {
            id: 1,
            image: expenses_img,
            para: "This Expense tracker allows us to add the essentials and track down the yearly expenses month by month. This helps us in maintaining the budget and finances of household.",
            demo: "https://expensescalci.netlify.app/",
            code: "https://github.com/Dimple-Ramya/expenses"
        },
        {
            id: 2,
            image: swiggy_clone_img,
            para: "The Little India Restaurant is an online food delivery application which allows us to see the list of restaurants, the restaurant's menu, the food items , their ratings and also allows us to add the items to the cart.",
            demo: "https://little-india-restaurant.netlify.app/",
            code: "https://github.com/Dimple-Ramya/little-restaurant"
        },
        {
            id: 3,
            image: youtube_clone_img,
            para: "This is a Mini version of youtube where we the youtube videos are embedded using react.js, where we can watch our favourite youtube videos and enjoy",
            demo: "https://youtube-small.netlify.app/",
            code: "https://github.com/Dimple-Ramya/youtube-clone"
        },
    ]

    const handlePrev = () => {
        if (activeTab == 1) {
            setActiveTab(1)
        }
        else {
            setActiveTab(activeTab - 1)
        }
    }

    const handleNext = () => {
        if (activeTab == data.length) {
            setActiveTab(1)
        }
        else {
            setActiveTab(activeTab + 1)
        }
    }


    return (
        <div className='mt-16'>
            <h3 className='font-sans text-2xl text-center text-white font-semibold'>Personal Projects</h3>
            <div className='flex flex-row ml-10 mt-6 w-full'>
                <button onClick={handlePrev}><GrPrevious className='text-white w-[40px] h-[30px] ml-6 hover:text-orange-400' /></button>
                {
                    data.map((each) => {
                        return (each.id === activeTab &&
                            < div key={each.id} className='flex flex-row  w-[80%] border-2 border-orange-400 ml-10 mr-10 rounded-xl' >
                                <img src={each.image} className='w-[270px] h-[280px] rounded-tl-xl rounded-bl-xl' />
                                <div >
                                    <p className='text-white mt-16 ml-6 mr-6 items-center flex justify-center text-justify'>
                                        {each.para}
                                    </p>
                                    <div className='ml-[30%] mt-10 flex flex-row justify-evenly w-[300px]'>
                                        <a href={each.demo} target='_blank' className='border-2 border-orange-400 hover:bg-orange-400 hover:text-black rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Demo</a>
                                        <a href={each.code} target='_blank' className='border-2 border-orange-400 hover:bg-orange-400 hover:text-black rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Code</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button onClick={handleNext}><GrNext className='text-white w-[40px] h-[30px] hover:text-orange-400' /></button>
            </div>
            <div className='flex flex-row w-[70px] ml-[47%] mt-10 justify-between'>
                <button className={activeTab === 1 ? 'bg-orange-400 w-3 h-3 border-2 border-orange-400 rounded-full' : 'bg-black w-3 h-3 rounded-full border-2 border-orange-400'}></button>
                <button className={activeTab === 2 ? 'bg-orange-400 w-3 h-3 border-2 border-orange-400 rounded-full' : 'bg-black w-3 h-3 rounded-full border-2 border-orange-400'}></button>
                <button className={activeTab === 3 ? 'bg-orange-400 w-3 h-3 border-2 border-orange-400 rounded-full' : 'bg-black w-3 h-3 rounded-full border-2 border-orange-400'}></button>
            </div>
        </div >





        // <div className='m-4 flex justify-evenly'>
        //     <div className='hover:shadow-xl hover:shadow-orange-400 border border-orange-400 bg-black rounded-xl relative w-[280px] h-[240px] '>
        //         <img src={expenses_img} className='w-[280px] h-[150px] rounded-t-xl' />
        //         <div className='flex flex-row justify-evenly mt-5'>
        //             <button className='border border-orange-400 rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Demo</button>
        //             <button className='border border-orange-400 rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Code</button>
        //         </div>
        //     </div>

        //     <div className='hover:shadow-xl hover:shadow-orange-400 border border-orange-400 bg-black rounded-xl w-[280px] h-[240px] '>
        //         <img src={swiggy_clone_img} className='w-[280px] h-[150px] rounded-t-xl' />
        //         <div className='flex flex-row justify-evenly mt-5'>
        //             <button className='border border-orange-400 rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Demo</button>
        //             <button className='border border-orange-400 rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Code</button>
        //         </div>
        //     </div>

        //     <div className='hover:shadow-xl hover:shadow-orange-400 border border-orange-400 bg-black rounded-xl w-[280px] h-[240px] '>
        //         <img src={youtube_clone_img} className='w-[280px] h-[150px] rounded-t-xl' />
        //         <div className='flex flex-row justify-evenly mt-5'>
        //             <button className='border border-orange-400 rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Demo</button>
        //             <button className='border border-orange-400 rounded-md bg-black text-white font-semibold font-xs p-[8px]'>Code</button>
        //         </div>
        //     </div>

        // </div>
    )
}

export default PersonalProj