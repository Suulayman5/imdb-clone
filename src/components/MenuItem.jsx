import React from 'react'
import Link from 'next/link'

const MenuItem = (title, address, Icon) => {
  return (
    <Link href={address}>
        <p className=''>{title}</p>
    </Link>
  )
}

export default MenuItem