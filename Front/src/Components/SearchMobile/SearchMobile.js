import styled from '@emotion/styled'
import { Search as SearchIcon } from '@mui/icons-material'
import { Box, IconButton, TextField } from '@mui/material'
import React from 'react'

const SearchMobile = () => {
  const SearchBar = ({ setSearchQuery }) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
  
  return (
    <>
      <SearchBar></SearchBar>
    </>
  )
}

export default SearchMobile