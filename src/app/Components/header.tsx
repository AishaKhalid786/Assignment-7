import React from 'react'

const Header = () => {
  return (
    <div className='sm:bg-slate-900 bg-zinc-700 md:w-full '>
      <ul className='container mx-auto flex justify-center items-center text-white gap-5 font-bold text-xl'>
        <h1 className='sm: font-bold text-green-800 md:black-500 mr-20 flex p-8 text-xl'>ShopNow</h1>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
