import { createTheme } from "@mui/material";


export const theme = createTheme({
    palette: {
        primary:{
            main:"rgb(83, 113, 136)",
            //darker:"#896131"
        }, 

        secondary: {
            main:"rgb(203, 178, 121)",
            //darker: "#82485B"
        },

        tertiary: {
            //roseda green, picked from theme
            main:"rgb(225, 212, 187)",
            //darker: "#6E7561" 
        },

        fourthiary: {
            //greyish
            main: "rgb(238, 238, 238)",
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
        
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    shape: {
        borderRadius: "10px"
    }

    })