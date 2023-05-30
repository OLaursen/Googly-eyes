import React from "react";
import NavBar from "../Components/NavBar/NavBar";

import ContentCard from "../Components/ListingsView/ContentCard";

const Expanded_view = (listingobj) => {
  return (
    <>
      <NavBar />
      <ContentCard {...listingobj} />
    </>
  );
};

export default Expanded_view;
