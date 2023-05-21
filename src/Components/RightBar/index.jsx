import { Box } from "@mui/material"
import React from "react"

const Rightbar = () => {
    return(
        <Box bgcolor={"purple"} flex={2} p={1} sx={{display: {xs: "none", lg: "block"}}}>Right bar</Box>
    )
}

export default Rightbar