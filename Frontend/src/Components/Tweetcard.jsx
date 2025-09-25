import React from 'react'
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";


const Tweetcard = ({ profile, name, username, time, caption, post, commentcount, retweetcount, likecount, statscount }) => {
    return (
        <div className='flex gap-5 px-5 pb-4 mt-3 border-b-1 border-gray-700'>

            {/* profile pic */}
            <img src={profile} className='w-12 h-12 max-sm:w-9 max-sm:h-9 rounded-full bg-center' />


            <div className='flex flex-col gap-1.5'>

                {/* username and name */}
                <div className='flex items-center gap-1.5'>
                    <h1 className='text-white font-bold text-md'>{name}</h1>
                    <h1 className='text-gray-400 text-sm'>{username}</h1>
                    <span className='w-1 h-1 bg-gray-400 rounded-full inline-block mt-0.5'></span>
                    <h1 className='text-sm text-gray-400'>{time}</h1>
                </div>

                {/* Caption */}
                <h1 className='text-md text-white max-sm:text-sm'>{caption}</h1>

                {/* post image */}
                <img src={post} className='w-80 h-110 rounded-lg mt-2 bg-cover' alt="" />

                {/* like, rt and comment */}
                <div className='flex justify-between items-center mt-0.5'>

                    {/* comment */}
                    <div className='flex items-center gap-1 text-gray-400 text-md max-sm:text-xs'>
                        <div className='mt-0.5'><FaRegComment /></div>
                        <h1>{commentcount}</h1>
                    </div>

                    {/* retweet */}
                    <div className='flex items-center gap-1 text-gray-400 text-md max-sm:text-xs'>
                        <div className='mt-0.5'><FaRetweet /></div>
                        <h1>{retweetcount}</h1>
                    </div>

                    {/* like */}
                    <div className='flex items-center gap-1 text-gray-400 text-md max-sm:text-xs'>
                        <div className='mt-0.5 text-sm'><FaRegHeart /></div>
                        <h1>{likecount}</h1>
                    </div>

                    {/* Statistics */}
                    <div className='flex items-center gap-1 text-gray-400 text-md max-sm:text-xs'>
                        <div><IoStatsChart /></div>
                        <h1>{statscount}</h1>
                    </div>

                    <div className='flex items-center gap-5 text-gray-400 text-md'>
                        <div className='max-sm:text-xs'><FaRegBookmark /></div>
                        <div className='max-sm:text-sm'><MdOutlineFileUpload /></div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tweetcard