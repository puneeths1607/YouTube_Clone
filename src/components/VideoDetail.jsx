import { useEffect, useState} from "react"
import { Link,useParams } from "react-router-dom"
import ReactPlayer from 'react-player';
import { Box, Stack, Typography, } from "@mui/material";
// import { CheckCircle} from "@mui/icons-material";
import { fetchFormAPI } from "../utils/fetchFromAPI";
// import { ClassNames } from "@emotion/react";
import Vidoes from "./Videos";

const VideoDetail = () => {

const [videoDetail,setVideoDetail]= useState("");
const [videos,setVideos] = useState([])
const {id}= useParams();


useEffect(() =>{
  fetchFormAPI(`videos?part=snippet,statistics&id=${id}`)
  .then((data)=>setVideoDetail(data.items[0]));

  fetchFormAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
 .then((data)=>setVideos(data.items))
 },[id]);


//  const { snippet:{title,channelId,channeltitle},
//     statistics:{viewCount,likecount} }=videoDetail;

  return (
   <Box minHeight="90vh">
     <Stack  direction={{xs:'coloum',md:'row'}}>
      <Box flex={1} display="flex">
        <Box sx={{width:'80%',position:'sticky',top:'86px'}}>
        <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`}
         height='530px' width='100%' controls/> 
{/* ?????????????????????????//////////////////////////////////////////// */}
    
        <Typography>
        {!videoDetail?.snippet?.title}
         </Typography>
        <Stack
       direction="row" justifycontent="space-between"
       sx={{ color:"#fff" }}py={1} px={2}>
        <Link to={`/channel/${!videoDetail?.snippet?.channelId}`}>
            <Typography variant={{sm:'subtitle',md:'h6'}}
            color="#fff">
                {!videoDetail?.snippet?.channeltitle}
            </Typography>
        </Link>

         <Stack direction="row" gap="20px" aligitems="center">
            <Typography variant="body1" sx={{opacity:0.7}}>
             {parseInt(!videoDetail?.statistics?.viewcount).toLocaleString()}views
            </Typography>
            <Typography variant="body1" sx={{opacity:0.7}}>
             {parseInt(!videoDetail?.statistics?.likecount).toLocaleString()}views
            </Typography>
          </Stack>
{/* ???????????/////////////////////////////////////////////////////////////////////// */}

           </Stack>
       </Box>
          <Box sx={{msOverflowY:"auto",overflowX:"hidden",height:"90vh",paddingRight:'40px'}}  py={{md:1,xs:5}}
      justifyContent="center"
      alignItems="center" >
      <Vidoes videos={videos} direction="column"/>
     </Box>
      </Box> 
      

   
     </Stack>
    
    </Box>
  )
}

export default VideoDetail