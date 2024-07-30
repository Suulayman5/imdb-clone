import React from 'react'
import MenuItem from'./MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'


const Header = () => {
  return (
    <div>
        <div className="">
            <MenuItem title = "Home" address = "/" Icon={AiFillHome}/>
            <MenuItem title = "About" address = "/" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Header