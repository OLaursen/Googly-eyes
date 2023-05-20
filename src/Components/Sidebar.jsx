import { Box } from "@mui/material"
import React from "react"

const Sidebar = () => {
    return(
        <Box bgcolor={"skyblue"} flex={2} p={1} sx={{display: {xs: "none", lg: "block"}}} >Sidebar</Box>
    )
}

export default Sidebar