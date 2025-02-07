import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoChannelTitle,demoChannelurl,demoVideoTitle,demoVideourl} from "../utils/constants"
const VideoCard = ({video: { id: { videoId }, snippet } }) => {
console.log(videoId,snippet)    
  return (
    <Card sx={{ width:{md:"330px", sx:"100%"}, borderRadius:"0",boxShadow:"none", marginLeft:"20px"}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideourl}>
        <CardMedia 
         image={snippet?.thumbnails?.high?.url}
         alt={snippet?.title}
         sx={{width:"100%",height:180}}
         />
        <CardContent sx={{backgroundColor:'lightgray', height:'150px'}}>
        <Link to={videoId ? `/video/${videoId}`:demoVideourl}>
        <Typography color='black' fontWeight="bold">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
            </Typography>
        </Link>
           
        <Link to={snippet?.channelid ?`/channel/${snippet?.channelid}`:demoChannelurl}>
        <Typography color='gray' fontWeight="bold">
                {snippet?.channeltitle || demoChannelTitle}
                <CheckCircle sx={{fontSize:"15px" , paddingTop:"3px"}}/>
        </Typography>
        </Link>
        </CardContent>
        </Link>
        
    </Card>
  )
}

export default VideoCard