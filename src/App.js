import { useState } from "react";
import "./App.css";
import {SignInWithGoogle} from "./firebase"
import ThemeToggle from "./theme";

function App(){
  
 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const[errors,setErrors]=useState({
    email:"",
    password:""
  })
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 

  function handleSubmit(){

    if(email.trim()===""){
      setErrors((errors)=>({...errors,email:"Enter Email"}))
    }
    else if(!emailPattern.test(email)){
      setErrors((errors)=>({...errors,email:"Enter valid Email address"}));

    }
    else{
      setErrors((errors)=>({...errors,email:""}));
    }

    if(password.trim()===""){
      setErrors((errors)=>({...errors,password:"Enter Password"}));
    }
    else if(password.length<8){
      setErrors((errors)=>({...errors,password:"Password can contain minimum 8 characters"}));

    }
    else{
      setErrors((errors)=>({...errors,password:""}));
    }


  }

 
  return( 
    <>
   
    
   
   <form className="form-element">
    <div className="border w-50  m-auto p-4">
      <h2 className="text-primary text-center">Google Authentication</h2>
      
    <div className="mt-3">
      <label>Email</label>
      <input type="email" className="form-control" value={email} placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}}/>
      {errors.email && <span className="text-danger">{errors.email}</span>}
    </div>

    <div className="mt-3">
      <label>Password</label>
      <input type="password" className="form-control" value={password} placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      {errors.password && <span className="text-danger">{errors.password}</span>}
    </div>
    <div className="mt-3"> 
    
      <button className="btn btn-primary w-100" onClick={handleSubmit}> Login</button>
    </div>
    </div>
    </form>
    
   
   
   
    <div className="App">
      <button type="button" class="login-with-google-btn" onClick={SignInWithGoogle} style={{marginLeft:"540px",marginTop:"10px"}}>sign in with Google</button>
      <h5 style={{marginLeft:"540px",marginTop:"10px"}}>{localStorage.getItem("name")}</h5>
      <h5 style={{marginLeft:"540px",marginTop:"10px"}}>{localStorage.getItem("email")}</h5>
      <img  style={{marginLeft:"540px",marginTop:"10px"}} src ={localStorage.getItem("profilePic")}/>
    </div>
   
    
    
    </>
   
  )
}

export default App;
