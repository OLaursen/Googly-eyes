import React from "react";
import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary:{
            main:"rgb(137, 97, 49)",
            //darker:"#896131"
        }, 

        secondary: {
            main:"rgb(130, 72, 91)",
            //darker: "#82485B"
        },

        tertiary: {
            //roseda green, picked from theme
            main:"rgb(110, 117, 97)",
            //darker: "#6E7561" 
        },

        fourthiary: {
            //greyish
            main: "rgb(150, 169, 173)",
            //darker: "#536C71"
        },


        //Contrast needs to be at least 4.5:1 inorder to satisfiy WCAG(Accessibility)
        contrastThreshold: 4.5,
    },
    components:{
        MuiCardMediamedia:{
            styleOverrides:{
                root:{
                    objectFit: "cover",
                }

            }
        },
        MuiCard:{
            styleOverrides:{
                maxWidth:"300px",
                maxHeight:"300px",
                
            }
        }
        
    }
    })