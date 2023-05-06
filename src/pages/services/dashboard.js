import React,{useEffect, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Dashboard = () => {
const[user, getUser] = useState();  
  
useEffect(()=>{

    var user = JSON.parse(localStorage.getItem("user"))
    getUser(user)

},[user])

const deleteAccount = (e)=>{
    e.preventDefault();
    localStorage.removeItem("user")
}



  
    return (
        <div style={{textAlign:"center",marginTop:"5rem"}}>
        <h1>Managment Dashboard</h1>
        <div className="singupPage"> 
        <TableContainer component={Paper}>
    {user > '0'?      <Table  size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="left">User Email</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">{user.password}</TableCell>
              <TableCell align="left"><button onClick={deleteAccount} style={{background:'red',color:'white',border:'red'}}>Delete</button></TableCell>
            </TableRow>
        </TableBody>
      </Table>:"No Data Found "
    }
    </TableContainer>
    <Link to="/"> Add New User</Link>
        </div>    
        </div>
  )
}

export default Dashboard