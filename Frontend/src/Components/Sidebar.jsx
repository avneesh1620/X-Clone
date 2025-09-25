import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { SidebarItems } from '../assets/assets';


const Sidebar = () => {
    return (
        <>
            <div className='text-white min-h-screen w-full border-r-1 border-gray-700'>

                <div className='flex flex-col py-4 px-6 gap-5'>

                    <div className='text-2xl cursor-pointer'><FaTwitter /></div>
                    {SidebarItems.map(({ name, icon: Icons }, index) => (
                        <div key={index} className='flex items-center gap-3.5 text-xl cursor-pointer px-1'>
                            <div><Icons /></div>
                            <h1>{name}</h1>
                        </div>
                    ))}
                    <button className='mt-3 bg-blue-400 p-3 rounded-4xl font-bold cursor-pointer'>Tweet</button>

                </div>

            </div>
        </>
    )
}

export default Sidebar