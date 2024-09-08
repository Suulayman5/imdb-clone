import Result from '@/components/Result'
import React from 'react'

const SearchPage = async() => {
    const searchTerm = params.searchTerm
    const res = await fetch(`https://api.themoviedb.org/3/movie/api_key=${Process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
    const data = await res.json()
    const results = data.return
  return (
    <div>
        {
            results && results === (
                <h1 className='text-center pt-6'>No results found</h1>
            )
        }
        {results &&<Result results={results}/>}
    </div>
  )
}

export default SearchPage