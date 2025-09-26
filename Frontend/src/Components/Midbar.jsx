import React from 'react'
import { bottombar, iconlist, SidebarItems, tweetaddbutton, tweetcard } from '../assets/assets'
import { FaTwitter } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import Tweetcard from './Tweetcard'
import { useEffect } from 'react';
import { PiDotsThreeCircleVerticalLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useState } from 'react';


const Midbar = ({ onToggle, isOpen }) => {


  const [toggleButton, setToggleButton] = useState(false)

  const handleTweetButton = () => {
    setToggleButton(prev => !prev)
  }


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);


  useEffect(() => {
    if (toggleButton) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggleButton]);


  return (
    <div className='min-h-full border-r-1 border-gray-700'>


      {/* Box 1A at sm point */}
      <div className='hidden max-sm:block pt-3 pb-1 px-6'>
        <div className='flex items-center justify-between'>
          <img onClick={onToggle} src="male.webp" className='w-8 h-8 rounded-full' alt="" />
          <div className='text-white text-2xl'><FaTwitter /></div>
          <div className='text-white text-2xl'><CiSettings /></div>
        </div>
      </div>


      {/* Mobile Slide View Sidebar */}
      {isOpen && (
        <div className={`fixed text-white top-0 left-0 bg-black h-full w-3/4 z-50 overflow-x-hidden transform transition-transform ease-in-out duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}  `}>

          {/* first part about user */}
          <div className='flex flex-col items-start gap-5 py-4 px-6'>

            {/* Image and three dots */}
            <div className='flex items-center justify-between w-full'>
              <img src="male.webp" className='w-8 h-8 rounded-full' alt="" />
              <div className='text-2xl'><PiDotsThreeCircleVerticalLight /></div>
            </div>

            {/* Name */}
            <div className='flex flex-col'>
              <h1 className='text-lg text-white'>Avneesh</h1>
              <h1 className='text-gray-400 text-xs'>@avneeshkumarsingh</h1>
            </div>

            {/* Follower and Following */}
            <div className='flex items-center gap-5'>
              <div className='flex items-center gap-1 text-xs'>
                <h1>64</h1>
                <h1 className='text-gray-400'>Following</h1>
              </div>
              <div className='flex items-center gap-1 text-xs'>
                <h1>1500</h1>
                <h1 className='text-gray-400'>Followers</h1>
              </div>
            </div>

          </div>


          <hr className='text-gray-700 mx-6' />


          {/* Second part about list */}
          <div className='flex flex-col gap-3 px-6 py-5'>
            {SidebarItems.map(({ name, icon: Icons }, index) => (
              <div key={index} onClick={onToggle} className='flex items-center gap-5 text-lg'>
                <div className='mt-0.5'><Icons /></div>
                <h1>{name}</h1>
              </div>
            ))}
          </div>

          <hr className='text-gray-700 mx-6' />


          {/* Setting and Support */}
          <div onClick={onToggle} className='px-6 py-5 flex items-center justify-between'>
            <h1>Settings & Support</h1>
            <div className='mt-1'><IoIosArrowDown /></div>
          </div>


        </div>
      )}


      {/* Making the background dim when the left sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-40"
          onClick={onToggle}
        ></div>
      )}



      {/* Box 1      */}
      <div className='flex justify-between items-center pt-2 px-35 max-sm:px-0 sticky top-0 bg-black text-white font-bold border-b-1 border-gray-600'>

        <h1 className='border-b-3 border-blue-400 py-3 max-sm:w-1/2 max-sm:flex max-sm:justify-center'>For you</h1>

        <h1 className='max-sm:w-1/2 max-sm:flex max-sm:justify-center'>Following</h1>

      </div>


      {/* Box 2 */}
      <div className='w-full border-b-1 border-gray-700'>

        <div className='flex gap-4 p-2.5'>

          {/* image */}
          <div>
            <img src="male.webp" className='w-10 h-10 rounded-full' alt="" />
          </div>


          {/* What happening */}
          <div className='flex flex-col gap-5 w-full'>

            <h1 className='text-gray-400 text-lg'>What's Happening ?</h1>

            <div className='flex items-center justify-between'>

              <div className='flex items-center gap-3'>
                {iconlist.map(({ icon: Icons }, index) => (
                  <div key={index} className='text-white text-xl max-sm:text-sm'><Icons /></div>
                ))}
              </div>

              <button className='bg-white py-1.5 px-3.5 max-sm:px-2.5 max-sm:py-0.5 max-sm:text-sm rounded-3xl font-bold mr-5'>Post</button>

            </div>

          </div>


        </div>

      </div>


      {/* Bottom bar */}
      <div className='bg-black fixed bottom-0 w-full sm:hidden'>
        <div className='flex items-center justify-between px-10 py-3'>
          {bottombar.map(({ icon: Icons }, index) => (
            <div key={index} className='text-white text-xl'>
              <Icons />
            </div>
          ))}
        </div>
      </div>




      {/* Tweet Cards */}

      {tweetcard.map((list, index) => (
        <div key={index}>
          <Tweetcard profile={list.image} name={list.name} username={list.username} time={list.time} caption={list.caption} post={list.post} commentcount={list.comment} retweetcount={list.retweet} likecount={list.like} statscount={list.stats} />
        </div>
      ))}


      {/* Tweet Button + Floating Menu */}
      <div className="fixed bottom-20 right-10 flex flex-col items-end gap-2 z-50 sm:hidden">

        {/* Floating Icons - Show only when toggleButton is true */}
        {toggleButton && (
          <div className="flex flex-col gap-3 mb-2 mr-4 ">
            {tweetaddbutton.map(({ name, icon: Icons }, index) => (
              <div key={index} className='flex items-center gap-2 text-white px-4 py-2 rounded-full'>
                <Icons />
                <span className='text-sm'>{name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Main Tweet Add Button */}
        <button
          onClick={handleTweetButton}
          className='text-white text-xl bg-blue-400 p-3.5 rounded-full shadow-lg'
        >
          <IoMdAdd />
        </button>

      </div>


      {/* making the background dim */}
      {toggleButton && (
        <div className='fixed inset-0 bg-black opacity-80' onClick={handleTweetButton}>

        </div>
      )}



    </div>
  )
}

export default Midbar