import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import React, {  useState } from "react";
const Blogpost = () => {
    const navigate=useNavigate();
const [userId,setUsername]=useState(sessionStorage.getItem("userId"));
const [token,setPassword]=useState(sessionStorage.getItem("userToken"));
const [Post,setName]=useState('');



const userAuthentication = ()=>{
  const userData=
  {
    "userId":userId,
    "token":token,
    "Post":Post

  }
  axios.post(`http://localhost:3001/blogpost`,
  userData
  ).then((response)=>{
  console.log(response.data)

if (response.data.status=="unauthorised user") {
    alert("LogIn First")
    navigate("/")
    
} else {

    if (response.data.status=="post added succesfully") {
        alert("Post Added succesfully")
        
    } else {
        alert("Something went wrong !! Try later")

    }
    
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
            <h1 className="fw-Bolder mb-3 pb-3 headeing" >POST A BLOG </h1>
            </div>
            <br/><br/>


            <div className="form-outline mb-2">

  <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Post a Message" required/>
 
</div>


<br/>

<br/>





<br/>
<div className="d-flex justify-content-center pt-3">

                    <button type="button" className="btn btn-secondary btn-lg">Cancel</button>
                 
                    <button onClick={userAuthentication} type="button" className="btn btn-secondary btn-lg ms-2">Post</button>
                    <a href="/">Back to LogIn</a>

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

export default Blogpost