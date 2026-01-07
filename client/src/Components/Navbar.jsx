import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between h-20 items-center bg-gray-200 shadow px-5'>
        <div className='w-[10%] flex items-center h-full'>
        <h1 className='text-zinc-800 font-bold'>Logo</h1>
        </div>
        <div className='w-[50%] h-full'>
        <ul className='w-full flex gap-6 list-none items-center h-full text-zinc-800 font-medium'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Contact Us</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar