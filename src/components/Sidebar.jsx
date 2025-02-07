import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
import  style  from "./css.module.css"

const Sidebar = ({setSelectedCategory,selectedCategory}) => (
    <Stack direction="row" 
    sx={{overflowY:"auto",
         height:{sx:"auto",md:"95%"},
         flexDirection:{md:"column"}
        }}
      
    >
        {categories.map((category)=>(
            <button className={style.category_btn}
            style={{backgroundColor:category.name ===
            selectedCategory && "purple"}}
            key={category.name}
            onClick={()=> setSelectedCategory(category.name)}
            >
               <span style={{ color: category.name === 
                selectedCategory ? "white":"purple" , paddingRight:"10px"}}>
                  {category.icon}
                </span> 
               <span style={{opacity: category.name ===
                selectedCategory ? "1": "0.8"}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
export default Sidebar