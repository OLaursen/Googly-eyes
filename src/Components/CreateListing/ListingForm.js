import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { Button, Container } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';


//Heavily inspired by MUI Template found at:
//https://github.com/mui/material-ui/blob/v5.13.1/docs/data/material/getting-started/templates/checkout/AddressForm.js






 const ListingForm = () => {


    //Bruger useState til at samle data fra inputfelter
    const[title, setTitle] = React.useState('');
    const[author, setAuthor] = React.useState('');
    const[ISBN, setISBN] = React.useState('');
    const[pictureSrc, setPictureSrc] = React.useState('');
    const[location, setLocation] = React.useState('');
    const[price, setPrice] = React.useState('');
    const[condition, setCondition] = React.useState('');
    const[description, setDescription] = React.useState('');


   
//Når listing skal "oprettes"
  function handleSubmit(input){
    //Taken from: 
    //react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form

      input.preventDefault();
      const form = input.target;
      const formData = new FormData(form);
      fetch('/some-api', {method: form.method, body: formData});

      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
  }
  function ConditionButtonsGroup() {
    return (
      <FormControl>
        <FormLabel id="condition-buttons-group-label" onChange={setCondition} value={condition} required>Condition</FormLabel>
        <RadioGroup
          row
          aria-labelledby="condition-buttons-group-label"
          name="condition-row-radio-buttons-group"
        >
          <FormControlLabel value="As New" control={<Radio />} label="As New" />
          <FormControlLabel value="Used" control={<Radio />} label="Used" />
          <FormControlLabel value="Very Used" control={<Radio />} label="Very Used" />
        </RadioGroup>
      </FormControl>
    );
  }

  return (
    <><form method="post" onSubmit={handleSubmit}>
      <Container sx={{ paddingBottom: 5 }}>

        <Box sx={{ height: '100vh' }}>

          <Typography variant="h4" gutterBottom justifyContent={"center"} display={"flex"}>
            Create Listing
          </Typography>
          <Grid container spacing={3} justify-Content={"center"}>

            <Grid item xs={12} sm={6}>
              <TextField
                
                id="title"
                name="title"
                label="Title of the Book"
                variant="standard" 
                type='text'
                onChange={event => setTitle(event.target.value)}
                value={title}
                fullWidth
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="author"
                name="author"
                label="Author"
                type='text'
                onChange={event => setAuthor(event.target.value)}
                value={author}
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="ISBN"
                name="ISBN"
                label="ISBN-number"
                type='text'
                onChange={event => setISBN(event.target.value)}
                value={ISBN}
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="pictureSrc"
                name="pictureSrc"
                label="Link to image of book"
                type='text'
                onChange={event => setPictureSrc(event.target.value)}
                value={pictureSrc}
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="location"
                name="location"
                label="Location(City)"
                type='text'
                onChange={event => setLocation(event.target.value)}
                value={location}
                fullWidth
                autoComplete="shipping address-level2"
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="price"
                name="price"
                label="Listing price"
                type='text'
                onChange={event => setPrice(event.target.value)}
                value={price}
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} justifyContent={"center"} display={"flex"}>
              {ConditionButtonsGroup()}
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label="Remarks"
                type='text'
                onChange={event => setDescription(event.target.value)}
                value={description}
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard" />
            </Grid>
            <Grid item xs={12} justifyContent={"center"} display={"flex"} sx={{ paddingTop: 2 }}>
              <Button size='large' variant="contained" id="submit" type='submit'>
                Add Listing
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
    </>
  );
}

export default ListingForm