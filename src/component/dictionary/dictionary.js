import React, { useState } from 'react'
import  './dictionary.css'
import axios from 'axios'
import { Button } from '@mui/material';
import {TextField} from '@mui/material';

const Dictionary = () => {
  const[value,setValue] = useState()
  const [words,getWords] = useState()

    const options = {
      method: 'GET',
      url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
      params: {word: value},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
    
  
  const handlSubmit = ()=>{
    axios.request(options).then(function (response) {
      getWords(response.data);
  }).catch(function (error) {
      console.error(error);
  });
  }
    


  return (
    <div className='dictonary'>

      <h1>Dictionary</h1>
      <br/>
      <TextField id="outlined-basic" label="Type Here" variant="outlined" onChange={(e)=>setValue(e.target.value)}/>
      <br/>
      <Button  onClick={handlSubmit} variant="contained" sx={{marginTop:'1rem'}} >Find Reciepe</Button>
      <br/>
      <p style={{marginTop:'1rem',marginBottom:'-1.3em',color:'white',fontSize:'2rem'}}>Title: {!words ?'':JSON.stringify(words.word).replace('"',"").replace('"',"")}</p>
      <div id='dic-container'>
       {!words ?'':<p className='text_p'> {JSON.stringify(words.definition).replace('"',"").replace('"',"")}</p>}
      </div>

    </div>
  )
}

export default Dictionary