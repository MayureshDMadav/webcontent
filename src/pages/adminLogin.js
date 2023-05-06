import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
import './mainPage.css'

const AdminLogin = () => {
    const[input,setInput] = useState({
        email :"",
        password:""
    })
    const navigate = useNavigate()


    const handleSubmit = (e) =>{
        e.preventDefault();
        localStorage.setItem("admin",JSON.stringify(input))
        var data =  JSON.parse(localStorage.getItem("admin"))
        if(input.email === data.email && input.password === data.password){
            navigate("/dashboard")
        }else{
            alert("Credentails Incorrect !!!")
        }
    }



  return (
    <div style={{textAlign:"center",marginTop:"5rem"}}>
    <h1>ADMIN LOGIN</h1>
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
        </form>
        
    </div>
  )
}

export default AdminLogin