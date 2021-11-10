import React from 'react'
import "./login.css"
import Social from '../socialbut/Social';
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
      
        <div className="log-main">
               <div  className="log-nav">
                <Link to=""> <h3>Back to main menu</h3> </Link>
               </div>
                <div className="log-img">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Imgur_Logo_Light.svg/1200px-Imgur_Logo_Light.svg.png"></img>
                </div>
               <br/><br/><br/><br/><br/>
               <h6>sign in with</h6>

               <Social />  

               <h6>or with imgur</h6> <br></br>
               <div className="log-sign-main">
               <form>
                  <div className="log-sign">
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
                         maxlength="10"
                         placeholder="Password"
            />
                      </p>
                    </div>  

                    <div className="need">
                       <h3><Link to="signup">need an account ?</Link><button className="need-but" type="submit">Sign In</button></h3>
                    </div>
                
                   </form>
                    <div className="log-footer">
                       <p>terms</p> 
                       <p>policy</p>
                    </div>
                  </div>
           </div>
      
    )
}

export default Login;