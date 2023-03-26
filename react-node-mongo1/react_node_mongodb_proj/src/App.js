import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [form,setForm] = useState({});                       //to store the form data
  const [users,setUsers] = useState([]);                      //to store the form data
  // const [gender,setGender] = useState([]);                    

  const formHandler= (event) => {                          //form event handler
  console.log(event.target.value,event.target.name);       //Event Handling the value and name of the input
  setForm({        
    ...form,                                                //form object destruring the data keep updating 
    [event.target.name] : event.target.value
  })                                                        // Asynchonously set the form data 
}
// const genderHandler=(event)=> {
//   setGender ({
//     [event.target.gender] : event.target.value
//    });

// } 

   const  submitHandler= async(event) =>{                            //On sumbit event handler
       event.preventDefault();                                  // to be save data in local storage
       const response = await fetch("http://localhost:3030/demo", {
        method: "POST",
        body:JSON.stringify(form),
        headers: {
          "Content-Type":"application/json"

        }
       });
       const data = await response.json();
     console.log(data);
  
   } 


const getUsers= async() =>{
  const response = await fetch("http://localhost:3030/demo", {
        method: "GET",
       
       });
       const data = await response.json();
    setUsers(data)
}
// const getGender= async() =>{
//   const response = await fetch("http://localhost:3030/demo", {
//         method: "GET",
       
//        });
//        const data = await response.json();
//     setGender(data)
// }


useEffect(()=>{
getUsers()
},[])
// useEffect(()=>{
// getGender()
// },[])

  return (
    <div>
      <form onSubmit={submitHandler}>
      
       {/* <p>{JSON.stringify(form)}</p> */}       {/* debog porpes updating form */}
        
        <h1>Rigistration Form</h1>

       <label  >Uploade Your photo:</label>
        <input type="file" placeholder="" name="image" onChange={formHandler} required/>  <br></br> <br></br>

        <label  >Name:</label>
        <input type="text" placeholder="Enter your name" name="name" onChange={formHandler}required/>  <br></br> <br></br>

         <label  >Email:</label>
        <input type="text" placeholder="Enter your email" name="email" onChange={formHandler}required/>  <br></br> <br></br>

        <label  >Phone number:</label>
        <input type="text" placeholder="Enter your phone number"  name="phoneNumber" onChange={formHandler} required/> <br></br> <br></br>

        <label  required>Gender:</label>
        <input type="checkbox" placeholder="select your gender"  name="gender" value="Male" onChange={formHandler} />
        <label  >Male</label>  
        <input type="checkbox" placeholder="select your gender"  name="gender" value="FeMale" onChange={formHandler} /> 
        <label  >Female</label>                         <br></br> <br></br>

        <label  >Password:</label>
        <input type="password" placeholder="Enter your password"  name="password" autoComplete="off" onChange={formHandler} required/> <br></br> <br></br>

        <label  >confirm Password:</label>
        <input type="password" placeholder="confirm password" name="newPassword" 
        autoComplete="off" onChange={formHandler}required/>  <br></br> <br></br>

        <input type="submit"  name="submit" /> 
        <button  name="registration"> Register  </button>
        <button  name="cancel" > cancel</button>


      </form>
      
      <div>
        <ul>

         {users.map(user=><li key={user._id}> {user.image} </li>)}
         {users.map(user=><li key={user._id}> {user._id} </li>)}
         {users.map(user=><li key={user._id}> {user.name} </li>)}
         {users.map(user=><li> {user.email} </li>)}
         {users.map(user=><li> {user.phoneNumber} </li>)}
         {users.map(user=><li> {user.gender} </li>)}
         {users.map(user=><li> {user.password} </li>)}
         {users.map(user=><li> {user.newPassword} </li>)}
         
        </ul>
      </div> 
    </div>
  );
}

export default App;
