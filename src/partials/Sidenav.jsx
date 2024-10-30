import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {

  

  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-3'>
        <h1 className='text-3xl '>
            <i className="text-[#6556CD] mr-2 ri-tv-2-line"></i>
            <span className='text font-semibold'>PDFI.</span>
        </h1>

        <nav className='flex flex-col text-xl text-zinc-500 gap-3'>
            <h1 className=' text-white text-2xl font-semibold mt-10 mb-5 ml-2'>New Feeds</h1>
            <NavLink to={'/Trending'} className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className="mr-1 ri-fire-line"></i>Trending</NavLink>
            <NavLink className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className="mr-2 ri-bard-line"></i>Populer</NavLink>
            <NavLink className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className="mr-2 ri-movie-2-line"></i>Movies</NavLink>
            <NavLink className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className="mr-2 ri-slideshow-3-line"></i>Tv Shows</NavLink>
            <NavLink className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className="mr-2 ri-team-line"></i>Peoples</NavLink>
        </nav>
        <hr className='border-none my-3 h-1 bg-slate-500'/>
        <nav className='flex flex-col text-xl text-zinc-500 gap-3'>
            <h1 className=' text-white text-2xl font-semibold mt-10 mb-5 ml-2 capitalize'>Website information</h1>
            <NavLink className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className=" mr-2 ri-information-2-line"></i>About us</NavLink>
            <NavLink className={"gello hover:bg-[#6556CD] hover:text-white p-4 rounded-lg duration-200 font-medium"}><i className="mr-1 ri-customer-service-2-line"></i> Contact Us</NavLink>
        </nav>


    </div>
  )
}

export default Sidenav