import React from 'react'
import MenuItem from'./MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link'


const Header = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6x1 mx-auto'>
        <div className=" flex gap-4">
            <MenuItem title = "Home" address = "/" Icon={AiFillHome}/>
            <MenuItem title = "About" address = "/" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="flex gap-1 items-center">
          <Link href={'/'} className='text-2x1 font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</Link>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </div>
    </div>
  )
}

export default Header