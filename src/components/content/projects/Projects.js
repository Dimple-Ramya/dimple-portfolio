import React from 'react'
import "../../../App.css"
import ProfessionalProj from './ProfessionalProj'
import PersonalProj from './PersonalProj'

const Projects = () => {
    return (
        <div className='h-full w-full bg-black pt-[80px] pb-[220px]'>
            <h1 className='font-sans text-6xl text-center text-white font-semibold'>My <span className='text-orange-400'>Projects</span></h1><br />

            <ProfessionalProj />

            <PersonalProj />
        </div>
    )
}

export default Projects