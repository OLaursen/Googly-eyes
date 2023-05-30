import { Divider, Typography } from "@mui/material";
import ContentCarousel from "./MyListingsCarousel.jsx";

import React, { useEffect, useState } from "react";
//ChatGPT Helped build this component
const FetchListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/book");
      const data = await response.json();
      setListings(data);
    };

    fetchData();
  }, []);

  return listings.length > 0 ? (
    <ContentCarousel listings={listings} />
  ) : null;
};

export const Feed = () => {
  return (
    <>
      <Divider role="presentation" />
      <FetchListings />
    </>
  );
};

export default Feed;

