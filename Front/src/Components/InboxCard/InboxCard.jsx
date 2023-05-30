import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box, Card, CardActionArea, CardContent } from '@mui/material';
import { theme } from '../../styles/theme/theme';
import { MoreVert } from '@mui/icons-material';

const InboxCard = () => {

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: "56%",
          display: "flex",
          alignItems: "center",
          marginTop: "8px",
          marginBottom: "8px",
          backgroundColor:"",
          [theme.breakpoints.up("md")]: {
            width: "100%",
          },
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <CardActionArea>
          <CardContent sx={{ display: "flex", alignItems: "center", justifyContent:"space-between",}}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box marginRight={"16px"} justifySelf={"center"}>
                <Avatar />
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"flex-start"}
              >
                <Typography>Flemming Sørensen</Typography>
                <Typography>
                  Algorithms and Data Structures - 5th edition
                </Typography>
                <Typography>450 Dkk</Typography>
              </Box>
            </Box>
            <Box>
              <MoreVert></MoreVert>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default InboxCard;