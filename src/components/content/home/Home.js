import React from 'react'
import homePic from "./home_img.png"
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Popover } from 'antd';

const Home = () => {
    return (
        <div className='flex flex-row justify-around bg-black h-full w-full pb-24'>
            <div className='h-[200px] mt-48'>
                <h2 className='font-sans text-4xl text-white font-semibold'>Hello, I am</h2>
                <h1 className='font-sans text-6xl text-white font-semibold'>Dimple Ramya</h1>
                <h2 className='font-sans text-4xl text-white font-semibold'>And I'm a <span className='text-orange-400'>Frontend Developer</span></h2>
                <div className='bg-black mt-8 flex flex-row justify-between w-[180px] ml-0'>
                    <Popover content="LinkedIn" placement='bottom' trigger="hover">
                        <a
                            className="hover:bg-orange-400 hover:text-black focus:bg-orange-400 focus:text-black text-orange-400 rounded-full p-2 border-2 border-orange-400"
                            href='https://www.linkedin.com/in/dimple-ramya-mandarapu/'
                            target="_blank"
                        >
                            <LiaLinkedinIn className='w-6 h-6 ' />
                        </a>
                    </Popover>

                    <Popover content="GitHub" placement='bottom' trigger="hover">
                        <a
                            className="hover:bg-orange-400 hover:text-black focus:bg-orange-400 focus:text-black text-orange-400 rounded-full p-2 border-2 border-orange-400"
                            href='https://github.com/Dimple-Ramya'
                            target="_blank"
                        >
                            <FaGithub className='w-6 h-6 ' />
                        </a>
                    </Popover>

                    <Popover content="Resume" placement='bottom' trigger="hover">
                        <a href='https://drive.google.com/file/d/1zIcq1BJqzUW6YW-FW8hQ-QZN08-_MO5B/view?usp=sharing' target='_blank' className="hover:bg-orange-400 hover:text-black focus:bg-orange-400 focus:text-black text-orange-400 rounded-full p-2 border-2 border-orange-400"><BsFillPersonLinesFill className='w-6 h-6 ' /></a>
                    </Popover>

                </div>
            </div>
            <div>
                <img src={homePic} className='h-[400px] w-[500px] border-none rounded-tl-[100px] rounded-br-[100px] mt-24' />
            </div>
        </div>
    )
}

export default Home