import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-white text-black text-center p-8'>
        <div className='flex items-center justify-center gap-3'>
        <h1 className='text-black text-xl font-bold'>designed by AISHA</h1>       
        </div>
        <div className='flex justify-center space-x-6 gap-5'>
        <Link href="/Clientside" className='px-5 py-5 bg-black text-xl text-white rounded-lg hover:bg-slate-800 transition-all'>
            Client-Side Renderding
        </Link>
        <Link href="/Serverside" className='px-5 py-5 bg-black text-xl text-white rounder-lg hover:bg-slate-800 transition-all'>
            Server-Side Rendering
        </Link>
        </div>
    </div>
  )
}

export default Footer