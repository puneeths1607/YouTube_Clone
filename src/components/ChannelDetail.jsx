import { useState,useEffect } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"


import{ChannelCard, Vidoes} from './'
import { fetchFormAPI } from "../utils/fetchFromAPI"
const ChannelDetail = () => {
  const {id} =useParams();
  const [channelDetail,setChannelDetail]=useState(null);
  const [vidoes,setVidoes] =useState([])
   

  console.log(channelDetail,vidoes)
  useEffect(()=>{

  fetchFormAPI(`channels?part=snippet&id=${id}`)
  .then((data)=> setChannelDetail(data?.items[0]))

  fetchFormAPI(`search?channelId=${id}7part=snippet&order=date`)
  .then((data)=> setVidoes(data?.items))
  },[id])
  
  return (
    <Box minHeight={"95vh"}>
      <div style={{
        background: 'linear-gradient(90deg, rgba(65,52,221,1) 19%, rgba(42,219,255,1) 43%, rgba(217,71,155,1) 77%)',  
        zIndex:'10',
        height:'300px'
      }}/>

      <ChannelCard channelDetail={channelDetail}
       marginTop="110x"/>

       <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}}/>
       <Vidoes vidoes={vidoes}/>
       </Box>
    </Box>
  )
}

export default ChannelDetail