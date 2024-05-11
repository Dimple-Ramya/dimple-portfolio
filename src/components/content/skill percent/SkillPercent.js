import React from 'react'

const SkillPercent = ({ logo, title, percent }) => {
    return (
        <div className='m-4 w-[300px]'>
            <img src={logo} className='w-[20px] h-[20px] m-0' />
            <div className='flex flex-row justify-between'>
                <h5 className='font-sm m-0 text-white'>{title}</h5>
                <h6 className=' font-xs m-0 text-white'>{percent}%</h6>
            </div>
            <div className="w-full bg-gray-200 h-[5px] rounded-full">
                <div
                    className="h-full bg-orange-400 rounded-full"
                    style={{ width: `${percent}%` }}
                >
                </div>
            </div>
        </div>

    )
}

export default SkillPercent