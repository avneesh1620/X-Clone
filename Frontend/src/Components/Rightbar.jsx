import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { followlist, trending } from '../assets/assets';


const Rightbar = () => {
  return (
    <div>

      <div className='bg-black sticky top-0 py-4 px-6'>
        {/* Search Bar */}
        <div className='text-white flex items-center gap-3 bg-gray-900 p-2 rounded-2xl'>
          <div className='ml-3'><IoSearchOutline /></div>
          <h1>Search Twitter</h1>
        </div>
      </div>

      <div className='py-4 px-6 flex flex-col gap-6'>

        {/* Get Verified */}
        <div className='text-white bg-gray-900 p-2 flex flex-col items-start gap-2 rounded-xl'>
          <h1 className='font-bold text-xl'>Get Verified</h1>
          <h1 className='text-md font-bold'>Subscribe to unlock new features</h1>
          <button className='bg-blue-500 py-1.5 px-5 rounded-2xl font-bold cursor-pointer'>Get Verified</button>
        </div>

        {/* Trending */}
        <div className='flex flex-col gap-6 bg-gray-900 p-2 rounded-xl'>

          {/* Whats Happening */}
          <h1 className='text-white text-xl font-bold'>What's Happening</h1>

          {/* Trending list */}
          {trending.map((list, index) => (
            <div key={index} className='flex flex-col'>
              <div className='flex items-center gap-1 text-xs text-gray-400'>
                <h1>{list.heading}</h1>
                <span className='w-0.5 h-0.5 bg-gray-400 rounded-full inline-block'></span>
                <h1>{list.location}</h1>
              </div>
              <h1 className='text-white font-bold text-sm'>{list.title}</h1>
              <h1 className='text-gray-400 text-xs'>{list.tweetcount} Tweets</h1>
            </div>
          ))}

          {/* Show more */}
          <h1 className='text-blue-400 text-sm'>Show more</h1>

        </div>

        {/* Who to Follow */}
        <div className='flex flex-col gap-6 bg-gray-900 p-2 rounded-xl'>

          <h1 className='text-white text-xl font-bold'>Who to Follow</h1>

          {/* Follow List */}
          {followlist.map((list, index) => (
            <div className='flex flex-col'>
              <div className='flex justify-between items-center'>

                <div className='flex items-center gap-3'>
                  <div>
                    <img src={list.image} className='w-10 h-10 rounded-full' alt="" />
                  </div>
                  <div className='flex flex-col text-white text-sm'>
                    <h1 className='font-bold'>{list.name}</h1>
                    <h1>{list.username}</h1>
                  </div>
                </div>

                <button className='bg-white py-2 px-4 rounded-3xl'>Follow</button>
              </div>
            </div>
          ))}


          {/* Show more */}
          <h1 className='text-blue-400 text-sm'>Show more</h1>


        </div>

      </div>

    </div>
  )
}

export default Rightbar