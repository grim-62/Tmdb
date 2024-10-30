import React from 'react'
import Dropdownn from './Dropdownn';

const Alltrend = ({data}) => {

console.log(data);
   

  return (
    <div className='h-[39vh] w-full '>
      <div className='m-2'>
        <h1 className='text-4xl text-white font-semibold text-whiite '>Trending</h1>
        <Dropdownn/>
      </div>
        <div className='p-1 overflow-x-auto w-full flex'>
           { data.map((e,i)=>(
                <div key={i} className='h-[29vh] min-w-[15%] pr-4 rounded-md overflow-hidden p-2'>
                    <img className='w-full h-36 object-cover object-center ' src={e.backdrop_path || e.poster_path ? `https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profilr_path}`:noimage} alt="" />
                    <h1 className='text-lg font-bold text-white'>{e.original_title || e.name || e.title || e.original_name}</h1>
                    <p className='text-white text-sm w-[100%] '>{e.overview.slice(0,50)}...<span className='text-zinc-400'>more</span></p>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default Alltrend
