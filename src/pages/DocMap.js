// commit to commit again
import React from 'react'
import { GoogleMap, LoadScript, Marker, useLoadScript, libraries } from '@react-google-maps/api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "./DocMap.css"
import "@reach/combobox/styles.css";

const useStyles = makeStyles({
  root: {
    width: 275,

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const containerStyle = {
  width: '100vw',
  height: '50vh'
};

const center = {
  lat: 39.7684,
  lng: -86.1581
};

const options = {

}

function DocMap() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
    <h1>Find a Physician!</h1>
    <TextField id="outlined-basic" label="Search Here" variant="outlined"/>
    {/* <Button>Search</Button> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={8}
        center={center}
        options={options}
      />
        <div className='results'>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            (type)Dentist
      </Typography>
          <Typography variant="h5" component="h2">
            Address
      </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Open
      </Typography>
          <Typography variant="body2" component="p">
            Ranking
        <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            (type)Primary Care Physicain 
      </Typography>
          <Typography variant="h5" component="h2">
            Address
      </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Open
      </Typography>
          <Typography variant="body2" component="p">
            Ranking
        <br />
            {'"one doc for all problems"'}
          </Typography>
        </CardContent>
        
      </Card>
      
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            (type)Chiropractor 
      </Typography>
          <Typography variant="h5" component="h2">
            Address
      </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Open
      </Typography>
          <Typography variant="body2" component="p">
            Ranking
        <br />
            {'"align yourself"'}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
    </div>

  )
}

// export function Search() {
//   const { } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 39.768, lng: () => -86.158 },
//       radius: 80 * 1000,
//     }
//   })
// }


export default DocMap