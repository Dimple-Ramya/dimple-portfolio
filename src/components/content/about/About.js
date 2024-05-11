import React from 'react'
import about_pic from "./about_pic.png"

const About = () => {
    return (
        <div className='flex flex-row justify-around bg-black h-full w-full pb-20'>
            <div>
                <img src={about_pic} className='h-[370px] w-[380px] rounded-tr-[63px] rounded-bl-[100px] mt-[130px]' />
            </div>
            <div className='w-[550px] h-[500px] mt-[90px]'>
                <h1 className='font-sans text-6xl text-white font-semibold'>About <span className='text-orange-400'>Me</span></h1><br />
                <h2 className='font-sans text-4xl text-white font-semibold'>Frontend Developer!</h2><br />
                <p className='font-sans text-white text-justify'>I am a skilled web designer with over 2.5yrs of experience in the industry.My passion lies in creating
                    captivating website designs and implementing them through frontend development. I take pride in staying
                    up-to-date with current design trends and leveraging my crativity to produce visually appealing
                    and user-friendly websites. In my career till now I have developed a deep understanding of user interface(UI) principles.
                    By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences.
                    I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable
                    interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's
                    specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence
                    that aligns with their brand identity.
                </p>
            </div>
        </div>
    )
}

export default About