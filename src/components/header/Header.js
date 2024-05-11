import React, { useState } from 'react'
import logo1 from "./name logo.png"
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    const [active, setActive] = useState(0)

    return (
        <div className='flex flex-row justify-between bg-black  h-[6%] w-full p-1 fixed'>
            {/* <a href='#home' className='ml-2'><img src={logo1} className='h-[40px]' /></a> */}
            <a href='#home' className='ml-4'><h2 className='font-serif text-[30px] font-semibold text-white'><span className='text-orange-400'>D</span>imple</h2></a>
            <ul className='flex flex-row w-1/3 justify-evenly mt-1'>
                <li
                    className={active === 1 ? "active-tab" : "inactive-tab"}
                    onClick={() => setActive(1)}>
                    <a href='#home' className='p-3'>Home</a>
                </li>
                <li
                    className={active === 2 ? "active-tab" : "inactive-tab"}
                    onClick={() => setActive(2)}
                >
                    <a href='#about' className='p-3'>About</a></li>
                <li
                    className={active === 3 ? "active-tab" : "inactive-tab"}
                    onClick={() => setActive(3)}
                ><a href='#skills' className='p-3'>Skills</a></li>
                <li
                    className={active === 4 ? "active-tab" : "inactive-tab"}
                    onClick={() => setActive(4)}
                ><a href='#projects' className='p-3'>Projects</a></li>
                <li
                    className={active === 5 ? "active-tab" : "inactive-tab"}
                    onClick={() => setActive(5)}
                ><a href='#contactform' className='p-3'>Contact</a></li>
            </ul>
        </div>
    )
}



export default Header