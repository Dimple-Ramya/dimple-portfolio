import React from 'react'
import { CgMail } from "react-icons/cg";
import { toast } from 'react-toastify';

import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Popover } from 'antd';

const ContactForm = () => {

    const submitForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7c2f4bd0-24d3-470f-94d5-5151d21f9c1d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            toast.success("Message sent Sucessfully")
        }
    };

    // const toasthandle = () => {
    //     toast.success("done")
    //     toast.error("error")
    // }

    return (
        <div className='h-full w-full pb-[100px] bg-black'>
            {/* <button className='text-white border border-white' onClick={toasthandle}>toast</button> */}
            <h1 className='font-sans text-6xl text-center text-white font-semibold'>Contact <span className='text-orange-400'>Me</span></h1><br />
            <div className='flex flex-row justify-between w-[50%] ml-[20%]'>
                <div className='w-[50%] mt-8'>
                    <h3 className='font-sans text-2xl text-center mr-6 mb-6 text-white font-semibold'>Contact Info</h3>
                    <p className='text-white flex'><CgMail className='w-8 h-8 bg-orange-400 text-black p-1 mr-2 rounded-full' />dimplemandarapu@gmail.com</p>
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
                            <a href='https://drive.google.com/file/d/1zIcq1BJqzUW6YW-FW8hQ-QZN08-_MO5B/view?usp=sharing'
                                target='_blank'
                                className="hover:bg-orange-400 hover:text-black focus:bg-orange-400 focus:text-black text-orange-400 rounded-full p-2 border-2 border-orange-400"><BsFillPersonLinesFill className='w-6 h-6 ' /></a>
                        </Popover>

                    </div>
                </div>

                <form onSubmit={submitForm} className='w-[50%] flex flex-col mt-7 ml-[20%]'>
                    <h3 className='font-sans text-2xl text-center mb-6 text-white font-semibold'>Let's connect !</h3>
                    <input
                        type='text'
                        name="name"
                        placeholder='Enter Name'
                        className='m-4 border border-orange-500 rounded p-1 w-[100%]'
                        required
                    />
                    <input
                        type='email'
                        name="email"
                        placeholder='Enter Email'
                        className='m-4 border border-orange-500 rounded p-1 w-[100%]'
                        required
                    />
                    <textarea
                        placeholder='Your Message'
                        name="message"
                        cols={30}
                        rows={6}
                        className='m-4 border border-orange-500 rounded p-1 w-[100%]'
                        required
                    />
                    <button type='submit' className='bg-orange-400 text-white rounded-md w-[80px] h-[30px] m-4'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm