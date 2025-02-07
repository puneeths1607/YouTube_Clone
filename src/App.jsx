import {BrowserRouter , Routes , Route} from "react-router-dom"
import { Box } from "@mui/material"

// import Navbar from "./components/Navbar"
// import VideoDetail from "./components/VideoDetail"
// import ChannelDet from "./components/ChannelDet"
// import SearchFeed from "./components/SearchFeed"

//To make this short  open  new index.js inside components and export all the files into it

import { Navbar,VideoDetail,ChannelDetail, Feed, SearchFeed } from "./components";


const App=()=>(
    
        <BrowserRouter>
        <Box sx={{backgroundColor: "black"}}>
        <Navbar/> 
        <Routes>
            <Route path="/" exact element={<Feed/>}></Route>
            <Route path="/Video/:id"  element={<VideoDetail/>} ></Route>
            <Route path="/ChannelDetail/:id"  element={<ChannelDetail/>} ></Route>
            <Route path="/search/:searchTearm"  element={<SearchFeed/>} ></Route>
        </Routes>
        </Box>
        </BrowserRouter>
    
)

export default App 