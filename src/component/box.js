import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from'../component/weatherapp/img/weather.png'

const  BoxSx = ()=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Weather App
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get Realtime-Time Weather Update on the basis of your location.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  );
}



export default BoxSx