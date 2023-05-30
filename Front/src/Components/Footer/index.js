import React from "react";
import "./Footer.css";
import { Box, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Box className="footer-container" marginTop={"24px"}>
        <Grid
          container
          className="footer-link-wrapper"
          display="flex"
          justifyContent={"space-between"}
          direction="row"
        >
          <Grid item sx={{xs:"12", md:"6", lg:"4" }}>
            <Typography variant="overline" class="footer-link-items">
              Rebook&trade;
              <br />
              All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" class="footer-link-items">
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" class="footer-link-items">
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" class="footer-link-items">
              Social Media
            </Typography>
          </Grid>
        </Grid>
    </Box>
  );
}

export default Footer;
