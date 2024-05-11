import React from 'react'
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import html_logo from "./html logo.png"
import css_logo from "./css logo.png"
import js_logo from "./js logo.png"
import react_logo from "./react logo.png"
import tailwind_logo from "./tailwind logo.png"
import SkillPercent from '../skill percent/SkillPercent';

const Skills = () => {

    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }} >
                <CircularProgress variant="determinate" {...props} style={{ width: "90px", height: "90px" }} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="caption" component="div" color="text.secondary">
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    // CircularProgressWithLabel.propTypes = {
    //     /**
    //      * The value of the progress indicator for the determinate variant.
    //      * Value between 0 and 100.
    //      * @default 0
    //      */
    //     value: PropTypes.number.isRequired,
    // };

    return (
        <div className='bg-black h-full w-full pt-24'>
            <h1 className='font-sans text-6xl text-center text-white font-semibold'>My <span className='text-orange-400'>Skills</span></h1><br />
            <div className='flex flex-row justify-around mt-[40px]'>
                <div>
                    <h3 className='font-sans text-2xl text-center text-white font-semibold'>Technical Skills</h3>
                    <div>
                        <SkillPercent logo={html_logo} title={"HTML"} percent={90} />
                        <SkillPercent logo={css_logo} title={"CSS"} percent={80} />
                        <SkillPercent logo={js_logo} title={"Javascript"} percent={75} />
                        <SkillPercent logo={react_logo} title={"React JS"} percent={75} />
                        <SkillPercent logo={tailwind_logo} title={"Tailwind CSS"} percent={60} />
                    </div>
                </div>

                <div>
                    <h3 className='font-sans text-2xl text-center text-white font-semibold'>Professional Skills</h3>
                    <div className='flex flex-row m-4'>
                        <div className='m-3'>
                            <div className='m-4 text-center'>
                                <CircularProgressWithLabel value={80} />
                                <h1 className='text-xs text-white font-bold'>Creativity</h1>
                            </div>
                            <div className='m-4 text-center'>
                                <CircularProgressWithLabel value={80} />
                                <h1 className='text-xs text-white font-bold'>Problem Solving</h1>
                            </div>
                        </div>
                        <div className='m-3'>
                            <div className='m-4 text-center'>
                                <CircularProgressWithLabel value={90} />
                                <h1 className='text-xs text-white font-bold'>Communication</h1>
                            </div>
                            <div className='m-4 text-center'>
                                <CircularProgressWithLabel value={90} />
                                <h1 className='text-xs text-white font-bold'>Team Work</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills