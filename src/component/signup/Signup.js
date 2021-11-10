import React from 'react'
import "./signup.css"
import Social from '../socialbut/Social'
import { Link  } from 'react-router-dom'


export const Signup = () => {
    return (
        <div className="sign-main">
          <div className="log-nav">
             <Link to=""> <h3>Back to main menu</h3> </Link>
          </div>
          <div className="log-img">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Imgur_Logo_Light.svg/1200px-Imgur_Logo_Light.svg.png"></img>
          </div>
           <br/><br/>
           <h6>Register with</h6>

           <Social /> 
           <div className="up-log-sign-main">
           <form>
              <div className="up-log-sign">
                 <input 
                    type="text"
                    name="username"
                    maxlength="50"
                    placeholder="Username or Email"
                    autoCapitalize="word"
                    autoComplete="off"
                    required
                  />
              
                  <p className="password">
                   <input
                     title=""
                     type="password"
                     name="password"
                     maxlength="20"
                     placeholder="Password"
                     />
                  </p>
                  <input
                     title=""
                     type="password"
                     name="password"
                     maxlength="10"
                     placeholder=" Retype Password"
                   /> <br /><br />
                  <input 
                   title=""
                   type="number"
                   name="number"
                   maxLength="10"
                   placeholder="Phone no"
                  
                  />
                  <h5>Standard message and data rates may apply.</h5>

                  <h5>Why do I have to verify my phone?</h5>
                  
                </div>  

                <div className="sign-in-but">
                      <button className="sign-in">Sign In</button>
                      <button className="next-but">Next</button>
                </div>
            
               </form>
      
           
        </div>
        </div>
    )
}
export default Signup;