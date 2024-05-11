import React, { useState } from 'react'
import cytranslate_img from "./cytranslate_img.png"
import healthcare_img from "./healthcare-img.png"
import bank_img from './bank-img.png'
import { GrPrevious, GrNext } from "react-icons/gr";

const ProfessionalProj = () => {
    const [activeTab, setActiveTab] = useState(1)

    const data = [
        {
            id: 1,
            image: cytranslate_img,
            para: "Cytranslate is a langauge translation service that uses Azure translation services for translating documents of all formats and displaying them through react doc viewer. Includes uploading files, integration of APIs, displaying data in tabular format and in viewer, usage of customized glossary files and libraries like Material UI and Antd."
        },
        {
            id: 2,
            image: healthcare_img,
            para: "This healthcare screening service is a dynamic and impactful project that involves creating a comprehensive screening application for healthcare workers, particularly ASHA workers and doctors. This application serves as a crucial tool for collecting and analyzing vital patient data, ultimately helping in the identification and management of chronic diseases like diabetes, as well as various other health issues."
        },
        {
            id: 3,
            image: bank_img,
            para: "Product Catalog stands as a transformative project within the Banking/Finance domain. It specializes in delivering personalized recommendations to users, leveraging their transaction histories. This encompasses tailored insights into available loans, credit card offers, limits, and potential tax reductions. Crafted with precision, the project introduces distinct modules to address specific requirements, ensuring users interact only with functionalities pertinent to their roles. This not only fortifies security measures but also elevates the overall user experience."
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
        <div className='mt-6'>
            <h3 className='font-sans text-2xl text-center text-white font-semibold'>Professional Projects</h3>
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
    )
}

export default ProfessionalProj