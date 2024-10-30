
import React from 'react'
import { Link } from 'react-router-dom'

const Hometrend = ({data}) => {

  
  return (
    <div style={{
        background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition:`center`,
        backgroundSize:`cover`
    }} className='w-full h-[50%] p-5 flex flex-col items-start'>
        <h1 className='text-5xl bottom-5 font-bold text-white'>{data.original_title || data.name || data.title}</h1>
        <p className='text-white text-sm w-[55%] mt-3'>{data.overview.slice(0,350)}...<Link className='text-blue-400'>more</Link></p>
        <div className='flex  mt-3 text-lg'>
           {data.first_air_date ? <p className='text-white mr-7'><i className="text-yellow-500 ri-calendar-schedule-fill"></i> : {data.first_air_date}</p>:<span></span> } 
            {data.media_type ? <p className='text-white mr-7 uppercase'><i className="text-yellow-500 ri-slideshow-3-fill"></i> : {data.media_type}</p>: <h1></h1>}
        </div>
        <Link className='bg-[#6556CD] p-2 text-lg mt-3 text-white rounded-md duration-100 active:bg-[#5747c1]'>watch trailer</Link>
    </div>
  )
}

export default Hometrend