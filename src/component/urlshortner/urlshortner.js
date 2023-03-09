import React, { useState } from 'react'
import '../urlshortner/urlshortner.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';

const  Urlshortner = () => {
    const[url,setUrl]= useState();
    const[text,setText] = useState('');
    const[error,setError] = useState();


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

    const header = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
       'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
    }

    const handleCLick = (e) => {
        e.preventDefault();

        console.log(text);
        const encodedParams = new URLSearchParams();
        encodedParams.append("url", text);
    
        axios.request('https://url-shortener-service.p.rapidapi.com/shorten',{
            headers: header,
            data: encodedParams,
            method: 'POST'
        },).then(response => {setUrl(response.data.result_url)}).catch(err =>setError(err.response.data.error))
    
    }

   


  return (
    <div className='url-shortner'>
        <h2> Url Shortening App </h2>
        <TextField    id="outlined-basic" label="Enter Url" size='small'   sx={{margin:'15px'}} onChange={(e)=>setText(e.target.value)} /><br/>
        <Button variant="contained" onClick={handleCLick}>Click to Shorten URL</Button><br/>
        {error ? <p><Alert sx={{margin:'35px',marginTop:'4rem',marginBottom:'-16rem',textAlign:'center',justifyContent:'center'}} severity="info">Please Enter Proper Format of URL! ex. https://test.com</Alert> <br/><h3 className='h3-child'>{JSON.stringify(error).replace('"',"").replace('"','')}</h3></p>:''}
        {!url ?'': <Box sx={{ width: 'auto',marginTop:'5em',marginLeft:'auto',marginRight:'auto',justifyContent:'center',display:"block" }}>
        <h4>URL Shrinked Successfully !!!</h4><br/>
      <Stack spacing={2} sx={{width:'80%',marginLeft:'auto',marginRight:'auto',height:'10px'}}>
        <Item><h3>{JSON.stringify(url).replace('"',"").replace('"','')}</h3></Item>
      </Stack>
    </Box> }
    </div>
  )
}


export default Urlshortner