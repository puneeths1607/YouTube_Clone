import { Box,CardContent,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

import {deomProfilePicture} from "../utils/constants"
const ChannelCard = (ChannelDetail,marginTop) => {
  return (
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{sx:'356px',md:'320px'},
      height:'326px',
      margin:'auto',
      marginTop,
      }}
      >
   <Link to={`/channel/${ChannelDetail?.id?.channelId}`}>
    <CardContent sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      textAlign:'center',
      color:'#fff'}}  
     >
      <CardMedia 
       image={ChannelDetail?.snippet?.thumbnails?.high?.url || deomProfilePicture}
      alt={ChannelDetail?.snippet?.title}
      sx={{
        borderRadius:'50px',
        height:'100px',
        width:'180px',
        mb:2,
        border:'1px solid #e3e3e3'    }}
      >
      <Typography variant="h6">
      {ChannelDetail?.snippet?.title}
      <CheckCircle sx={{fontSize:"15px" , paddingTop:"3px",color:'gray'}}/>
      </Typography>  
       {ChannelDetail?.snippet?.subscribercount &&
       (<Typography>
         {parseInt (ChannelDetail?.statistics?.subscribercount).toLocaleString()} subscribers
        </Typography>)}
      
      
      </CardMedia>
    </CardContent>

   </Link>
    </Box>
  
  )
}

export default ChannelCard