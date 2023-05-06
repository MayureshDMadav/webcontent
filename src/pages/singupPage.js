import React, { useState } from "react"
import "./mainPage.css"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";

const SingupPage = () => {
   const navigate = useNavigate();
   const[input,setInput] = useState({
    name:"",
    email:"",
    password:""
   })     


   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target)
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/Loginpage")
   }


  return (
    <div style={{textAlign:"center",marginTop:"5rem"}}>
    <h1>Complete Singup to use our Applications</h1>
    <form onSubmit={handleSubmit} className="singupPage"> 
        <TextField id="outlined-basic" label="User Name"  name="name" value={input.name} onChange={(e) =>setInput({...input,[e.target.name] : e.target.value})} />
        <TextField id="outlined-basic" label="Password" type="password"  name="password"  value={input.password} onChange={(e) =>setInput({...input,[e.target.name] : e.target.value})}/>
        <TextField id="outlined-basic" label="Your Email"  name="email" value={input.email}  onChange={(e) =>setInput({...input,[e.target.name] : e.target.value})}/>
        <Button variant="outlined" type="submit" sx={{background:"white",border:"3px solid black",borderRadius:"2px",color:"black",fontFamily:"monospace",}}>Registration</Button>
        <span> Already an User ?<Link to='/Loginpage'> Click Here to Login</Link></span>
        </form>
    
    </div>
  )
}

export default SingupPage