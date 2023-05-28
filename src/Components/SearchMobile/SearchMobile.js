import styled from '@emotion/styled'
import { Search } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const SearchMobile = () => {
  const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    padding: "0 8px",
    borderRadius: theme.shape.borderRadius,
    width: "30%",
  }));
  
  return (
    <>
      <Search></Search>
    </>
  )
}

export default SearchMobile