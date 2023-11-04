import React from 'react'
import SlideCrousel from '../components/Crousel'
import smartWatch from '../assets/images/MinimalistGW.png'

const About = () => {
    return (
        <div>
            <div className=' bg-orange-100 relative top-14 p-4 md:px-14'>
                <div className=' h-auto md:h-[64vh] grid gap-4 grid-cols-4 md:grid-cols-3 pt-4 pb-4'>
                    <div className='col-span-4 row-span-2 md:col-span-2 rounded-md'> <SlideCrousel /> </div>
                    <div className='col-span-2  md:col-span-1 rounded-md overflow-hidden object-center cursor-pointer'>
                        <img src={smartWatch} alt="" className=' object-cover w-full h-full hover:scale-110 transition-all duration-500' />
                    </div>
                    <div className='bg-purple-400 col-span-2 md:col-span-1 rounded-md overflow-hidden object-cover cursor-pointer'>
                        <img src={smartWatch} alt="" className='object-cover w-full h-full hover:scale-110 transition-all duration-500' />

                    </div>
                </div>
                <div className='bg-orange-400 col-span-full '>Bottom</div>
            </div>
        </div>
    )
}

export default About