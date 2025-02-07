import { useState,useEffect } from "react"
import { Box,Typography } from "@mui/material"

import {Vidoes} from "./"
import { fetchFormAPI } from "../utils/fetchFromAPI"

import { useParams } from "react-router-dom"

const SearchFeed = () => {
 const [videos,setVideos]=useState([]);
 const {searchTearm}=useParams();


 useEffect(()=>{
   fetchFormAPI(`search?part=snippet&q=${searchTearm}`)
   .then((data) => setVideos(data.items));
  },[searchTearm]);

  return (
    
    <Box p={2} sx={{overflowY:"auto",height:"90vh", flex: 2 }}>

      <Typography
       variant="h4"
       fontWeight="bold"
       mb={2} 
       sx={{color:"white",}}>
       
       Search Reasult for: <span style={{color:"purple"}}>searchTearm</span> vidoes
       </Typography>
       <Vidoes videos={videos}/>
    </Box>
    
  )
}

export default SearchFeed