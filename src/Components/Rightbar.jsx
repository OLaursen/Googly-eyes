import { Box } from "@mui/material"
import React from "react"

const Rightbar = () => {
    return(
        <Box bgcolor={"purple"} flex={1} p={2} sx={{display: {xs: "none", lg: "block"}}}>Right bar</Box>
    )
}

export default Rightbar