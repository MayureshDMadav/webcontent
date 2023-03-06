import React from 'react'
import '../imageGen/imageAi.css'
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { TextField,Button } from '@mui/material';
import Box from '@mui/material/Box';


const Openaiimage = () => {



    function createData(name, value) {
        return { name, value };
      }

      const rows = [
        createData('Name Of Image', <TextField id="outlined-basic" label="Enter Name" variant="outlined"  size="small"/>),
        createData('Number of Images',<TextField id="outlined-basic" label="Enter Number" variant="outlined"  size="small"/>),
        createData('Size of Images', <TextField id="outlined-basic" label="Enter Size" variant="outlined"  size="small"/>),
        createData('', <Button>SUBMIT</Button>),
      ];

    return (
    <div className='container'>
        <h1>TYPE TO CREATE IMAGE</h1>
        <TableContainer component={Paper} sx={{width:"63%",justifyContent:'center',marginRight:'auto',marginLeft:'auto',marginTop:"1rem",marginBottom:'3rem'}}>
                <TableBody sx={{ textAlign: 'center' }}>
                    {rows.map((row) => (
                        <TableRow >
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>        
        </TableContainer>
    <div id='imageContainer'>

    </div>
        
    </div>
  )
}

export default Openaiimage