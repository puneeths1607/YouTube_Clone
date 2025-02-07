import { Stack } from "@mui/material"
import {Link}from "react-router-dom"
import logo from "../utils/logo1-removebg-preview.png"
import Searchbar from "./Searchbar"

const Navbar = () => (
    <Stack
     direction="row" 
     alignItems="center" 
     p={2} sx={{  position:"sticky", background:"#000",top:0, justifyContent:"space-between" }}
    
   >
       
    <Link to="/" style={{ display:"flex", alignItems:"center", position:"top" ,height:"30px"}}>
        <img src={logo} alt="logo" height={45} />
    </Link>
    <Searchbar/>
    </Stack>
  )


export default Navbar