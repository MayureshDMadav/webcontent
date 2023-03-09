import React, { useState } from 'react'
import axios from 'axios';
import './reciepe.css'
import { Button } from '@mui/material';
import {TextField} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const  Reciepe = () => {
  const[data,setData]=useState();
  const[value,setValue]=useState();  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  


  const handlSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
      params: {query: value},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_SECRET_KEY,
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      setData(response.data)
      
    }).catch(function (error) {
      console.error(error);
    });
    
   
  }

  
    return (
    <div className='reciepe'>
      <h2> Reciepe Finder </h2>
      <br/>
      <TextField id="outlined-basic" label="Type Here" variant="outlined" onChange={(e)=>setValue(e.target.value)}/>
      <br/>
      <Button  onClick={handlSubmit} variant="contained" sx={{marginTop:'1rem'}} >Find Reciepe</Button>
      {!data ? '':data.map((res)=>( 
         <Box sx={{ width: '50%',justifyContent:'center',marginLeft:'auto',marginRight:'auto' }}>
          <Box>     
         <Grid item xs={5} sx={{marginTop:'2rem',width:'100%',justifyContent:'center',display:'flex'}}>
         <Item sx={{width:'100%',color:'white',fontWeight:'900',fontFamily:'sans-serif',background:'transparent',boxShadow:'none',fontSize:18}}><strong>{res.title}</strong></Item> 
       </Grid></Box>
      <Button  sx={{width:'100%',color:'white'}} onClick={handleOpen} variant='text'>Click To Know Reciepe</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <strong>Ingredients</strong><br/>
          <Typography id="keep-mounted-modal-title" sx={{ fontSize:'12px'}}>
           {res.ingredients}
          </Typography>
          <Typography id="keep-mounted-modal-title" sx={{ mt: 2 ,fontSize:'13px'}}>
          <strong>Instructions</strong><br/>
          {res.instructions}
          </Typography>
        </Box>
      </Modal>
       </Box>
      ))}
    </div>
  )
}

export default Reciepe