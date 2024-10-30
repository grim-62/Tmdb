import React, { useEffect, useState } from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import Hometrend from '../partials/Hometrend'
import axios from '../../utils/axios';
import Alltrend from '../partials/Alltrend';

const Home = () => {
    document.title = " PDFI | home"

    const [wallpaper, setwallpaper] = useState(null)
    const [allTrend, setallTrend] = useState(null)

    const Getwallpaper = async () => {
        try {
          
            const {data} = await axios.get(`/trending/all/day`)
            let randomdata = data.results[(Math.random()*data.results.length).toFixed()]
            setwallpaper(randomdata)
            setallTrend(data.results)
            
        } catch (error) {
            console.log("Error :",error );
        }
    } 
    console.log(wallpaper)

    useEffect(() => {
     !wallpaper && Getwallpaper()
    }, [])
    

  return wallpaper && allTrend ? (
    <>
    <Sidenav/>
    <div className='h-full w-full overflow-auto overflow-x-hidden'>
      <Topnav/>
      <Hometrend data={wallpaper}/>
      <Alltrend data={allTrend}/>
    </div>
    </>
  ): <h1>loading..</h1>
}

export default Home