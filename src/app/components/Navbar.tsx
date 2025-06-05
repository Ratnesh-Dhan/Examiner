import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' py-3 md:py-5 bg-[#8E1616]'>
            {/* <div className='container mx-auto'> */}
        <div className='flex justify-between items-center mx-5 md:mx-10'>
            <ul className='flex gap-4'>
                <li className='hover:text-gray-500'>
                    <Link href="/">Home</Link>
                </li>
                <li className='hover:text-gray-500' >
                    <Link href="/Analog">Analog</Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link href="/Digital">Digital</Link>
                </li>
                <li className='hover:text-gray-500'>
                    <Link href="/About">About</Link>
                </li>
            </ul>
        </div>
        </div>
  )
}

export default Navbar