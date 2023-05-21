
import styled from "@emotion/styled";
import { colors } from "@mui/material";

export const ListingImage = styled("img")(({src})=>({
    src: src,
    objectFit: "cover",
    width: "100px",
    heigh: "100px",
    padding: "10px",
}))