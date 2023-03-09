import React, {useState } from 'react'
import './musicplayer.css'
import axios from 'axios'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Musicplayer = () =>{
    const[state,setState] = useState([])
    const[data,setData] = useState('')

    const Headers = {
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': '9192bec45bmsh602ac3bc1adcc05p12a311jsnc89398bab041'
    }



    const handleChange = (e) =>{
        setData(e.target.value);

    }


    const findMusic = (e) => {
    
            axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q='+data,{
                headers:Headers
            }).then((response) => {
                setState(response.data.data)
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })

    }


    return(
        <div className='music-player'>
       
            <h1>Music Player</h1>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" size='small' label="Enter Music Name" variant="outlined" sx={{height:'1.8em !important',color:'white'}} onChange={handleChange} /><br/>
      <Button variant="contained" size="large" onClick={findMusic}>Search Music</Button>
     
    </Box>
           
            {!state? "NO LIST TO DISPLAY": state.map(post => ( 
                <table>
                <tr colSpan='2'>
                  <th >{post.title}</th>
                </tr>
                <tr rowSpan='4'>
                  <td><img src={post.artist.picture_medium} alt='' /> <p> Name: {post.artist.name}</p></td>
                </tr>
                <tr>
                  <td><audio src={post.preview} controls></audio></td>
                </tr>

              </table>
                
                             ))}
           
     
        </div>
    )
}

export default Musicplayer;