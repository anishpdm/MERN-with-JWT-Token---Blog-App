import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, {  useState } from "react";
const Signin = () => {
    const navigate=useNavigate();
const [username,setUsername]=useState('');
const [password,setPassword]=useState('');



const userAuthentication = ()=>{
  const userData=
  {
    "email":username,
    "password":password
  }
  console.log(userData)
  axios.post(`http://localhost:3001/signin`,
  userData
  ).then((response)=>{

    console.log(response.data)

    if (response.data.status=="success") {

        let token=response.data.token
        let userId=response.data.data[0]._id
        // alert("valid user")
        // alert("userId => "+userId)
        // alert("token => "+token)

        sessionStorage.setItem("userToken",token)
        sessionStorage.setItem("userId",userId)

        navigate("/blogpost")



        
    } else {
        alert("Invalid user")
 
    }
   
   })
  }
  return (
    <div>
        
    <div> <section className="Background">
  
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-6">
        <div className="card card-form" >
          <div className="row g-0">
        
             
          <form>
            <div className="card-body p-md-5 text-black">
            <div className="d-flex justify-content-center pt-3">
            <h1 className="fw-Bolder mb-3 pb-3 headeing" >Login</h1>
            </div>
            <br/><br/>
<div className="form-outline mb-2">

  <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Id" required/>
 
</div>
<br/>
<div className="form-outline mb-2">

  <input type="text" onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required/>
</div>
<br/>





<br/>
<div className="d-flex justify-content-center pt-3">

                    <button type="button" className="btn btn-secondary btn-lg">Cancel</button>
                 
                    <button onClick={userAuthentication} type="button" className="btn btn-secondary btn-lg ms-2">Login</button>
                
                <a href="/signup">Go to Sign Up</a>
                  </div> 
</div>
</form>
  
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  </div>

</div>
  )
}

export default Signin