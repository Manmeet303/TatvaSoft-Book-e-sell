import { Button , Link } from '@mui/material';
import React from 'react';
import '../../Css/Home.css';
import arrowsvg from "../../../src/Views/images/breadcrumb-arrow.svg";


function Home() {
  return (
   <>
     <div className='Home'>
       <div className='headerpart'>
         <form className='search-form'>
           <input type="text" className="textfield" placeholder='What are you looking for ...'/>
           <input type="submit" className="submit-btn" name='Submit' />
           <button className="cancel-btn">Cancel</button>
          </form>
       </div>

       {/* Home page container  */}
       <div className='home-container'>
         <div className='flex-container'>
            <Link to="/" className="homelink">Home</Link>
            <img src={arrowsvg} alt="arrow" ></img>
            <p className="create-account"> Create an Account </p>
          </div>
          <h1 className="loginheading">Login or Create An Account</h1>
       </div>

       {/* Create Account Informatiom */}
       <form className="registerform">
       <div className="information">
          <h1 className='info-heading'>Personal Information</h1>
          <label>Please Enter the following information to create an account</label>


          <div className='name-info'>
          {/* Firstname Div with label and field*/}
            <div className='firstname'>
              <label>First Name : * </label>
              <br></br>
              <input type="text" placeholder='Enter Your First Name...' className="fname"></input>
            </div>
          {/* Last Name with label and input field */}
            <div className='lastname'>
              <label>Last Name : * </label>
              <br></br>
              
              <input type="text" placeholder='Enter Your Last Name...' className="lname"></input>
            </div>

          </div>

          {/* Email address with label and field */}
          <div className='email-address'>
              <label>Email address : * </label>
              <br></br>
              
              <input type="text" placeholder='Enter Your Email address here...' className="email"></input>
            </div>

       </div>

       <div className="Login-password-inforamtion">
          <h1 className='logininfo-heading'>Login Information</h1>


          <div className='pass-info'>
          {/* Firstname Div with label and field*/}
            <div className='password'>
              <label>Password : * </label>
              <br></br>
              <input type="text" placeholder='Enter Password...' className="pass"></input>
            </div>
          {/* Last Name with label and input field */}
            <div className='confirm-password'>
              <label>Confirm Password : * </label>
              <br></br>
              
              <input type="text" placeholder='Enter password again...' className="cpass"></input>
            </div>

          </div>
          </div>

          <Button className="register-button">Register</Button>
          </form>
     </div>
   </>
  )
}

export default Home;