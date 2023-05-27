import { Box } from "@mui/material"
import React from "react"
import { theme } from "../../styles/theme/theme"

const Rightbar = () => {
    return(
        <Box bgcolor={"inherit"} flex={2} p={1} sx={{display: {xs: "none", lg: "block"}}}></Box>
    )
}

export default Rightbar