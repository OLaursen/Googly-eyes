import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Select } from '@mui/material';


//Heavily inspired by MUI Template found at:
//https://github.com/mui/material-ui/blob/v5.13.1/docs/data/material/getting-started/templates/checkout/AddressForm.js





export function ListingForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Create Listing
      </Typography>

      <Grid container spacing={3} justify-Content={"center"}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Title of the Book"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="author"
            name="author"
            label="Author"
            fullWidth
            variant="standard"
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Short description"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pictureSrc"
            name="pictureSrc"
            label="Link to image of book"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="location"
            name="location"
            label="City"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Listing price"
            fullWidth
            variant="standard"
          />
        </Grid>
        
        
        <Grid item xs={12}>

           <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> 
        </Grid>
      </Grid>
    </>
  );
}