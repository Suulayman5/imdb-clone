import React from 'react'
import Link from 'next/link'

const MenuItem = ({title, address, Icon}) => {
  return (
    <Link href={address} className='hover:text-amber-600'>
      <Icon className='text2x1 sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem