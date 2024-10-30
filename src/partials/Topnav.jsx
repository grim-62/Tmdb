import axios from '../../utils/axios'
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import noimage from '/noimage.webp'

const Topnav = () => {

  const [query, setquery] = useState("")
  const [searches, setsearches] = useState([])
  
  
  const Getserches = async () => {
    try{
        const {data} = await axios.get(`/search/multi?query=${query}`)
        setsearches(data.results)
    }catch (err){
      console.log("ERR",err);
    }
  }

  useEffect(() => {
      Getserches()
  }, [query])
  
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
        <div className="bg-zinc-200 flex justify-between px-5 rounded-full items-center w-[45vw]">
          <div className="w-full">
            <i className="text-zinc-800 text-2xl ri-search-line "></i>
            <input className="w-[70%] text-black mx-5 p-5 text-x1 outline-none border-none bg-transparent"type="text" onChange={(e)=>setquery(e.target.value)}value={query}placeholder="search anything"></input>{" "}
          </div>
          <div>{query.length > 0 && (<i onClick={()=> setquery("")} className="text-zinc-900 cursor-pointer text-3xl ri-close-fill"></i>)}</div>
        </div>

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-100 top-[90%] rounded-md overflow-auto">
       
        {searches.map((e,i)=>(
          <NavLink key={i} className="w-[100%] p-3 flex hover:bg-zinc-200 hover:text-black font-semibold justify-start items-center border-b-2">
            <img className='w-[10vh] object-cover rounded-sm mr-5 h-[10vh] shadow-lg' src={e.backdrop_path || e.profilr_path ?`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profilr_path}`:noimage} alt="" />
            <span>{e.title || e.name || e.original_name || e.original_title}</span> 
          </NavLink>
        ))}

      </div>

    </div>
  );
};

export default Topnav;
