import { Search } from "@mui/icons-material"
import { Paper ,IconButton} from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Searchbar = () => {
  const [searchTearm,setSearchTearm]=useState('');
  const navigate=useNavigate();
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(searchTearm){
     navigate(`/search/${searchTearm}`)
     setSearchTearm('');
    }
  }
  return (
        <Paper component="form"
        onSubmit={handlesubmit}
        sx={{borderRadius:10,
        border:"1px solid #e3e3e3",
        pl:2,
        boxShadow:"none",
        mr:5,
        mt:1,
        height:"35px",
        width:300,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        }}
        >
            <input className="search-bar" 
            placeholder="search.."
            value={searchTearm}
            onChange={(e) => setSearchTearm(e.target.value)}
            style={{border:"none",outline:"none", width:"85%"}}
            />
            <IconButton type="submit" sx={{ color:"red"}}>
            <Search/>
            </IconButton>
        </Paper>
    
    
  )
}

export default Searchbar
