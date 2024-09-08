'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'

const SearchBox = () => {
    const [search, setSearch] = useState('')
    const router = useRouter
    const handleSubmit = e =>{
        e.preventDefault()
        router.push(`/search/${search}`)
    }
  return (
    <div>
        <form className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search here...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent' 
                value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <button className="text-amber-600 disabled:text-gray-400" disabled={search === ''}>Search</button>
        </form>
    </div>
  )
}

export default SearchBox