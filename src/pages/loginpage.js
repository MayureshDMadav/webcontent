import React,{useState} from 'react'
import "./mainPage.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate ,Link} from "react-router-dom";
import { Typography } from '@mui/material';

const Loginpage = () => {

    const navigate = useNavigate();
    const[input,setInput] = useState({
     email:"",
     password:""
    })     
 
 
    const handleSubmit = (e) =>{
     e.preventDefault();
     console.log(e.target)
     const loguser= JSON.parse(localStorage.getItem("user"));
     if(input.email === loguser.email && input.password && loguser.password){
        localStorage.setItem("loggedin",true)
        navigate("/mainpage")
     }else{
        alert("wrong email or password");
        navigate("/")
     }
    }
 


  return (
    <div style={{textAlign:"center",marginTop:"5rem"}}>
    <h1>Login to Continue</h1>
    <form onSubmit={handleSubmit} className="singupPage"> 
        <Typography  sx={{textAlign:'left'}} component="h8">
            Enter Email
        </Typography>
        <TextField id="outlined-basic"   name="email" value={input.email}  onChange={(e) =>setInput({...input,[e.target.name] : e.target.value})}/>
        <Typography  sx={{textAlign:'left'}} component="h8">
            Enter Password
        </Typography>
        <TextField id="outlined-basic"  type="password"  name="password"  value={input.password} onChange={(e) =>setInput({...input,[e.target.name] : e.target.value})}/>   
        <Button variant="outlined" type="submit" sx={{background:"white",border:"3px solid black",borderRadius:"2px",color:"black",fontFamily:"monospace",}}>LOG IN</Button>
         <span> Not an User ?<Link to='/'> Click Here to Register</Link></span>
        </form>
        
    </div>
  )
}

export default Loginpage