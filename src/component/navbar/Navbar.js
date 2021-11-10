import React from 'react'
import "./navbar.css";
import Header from '../header/Header';
import { Link } from 'react-router-dom';




export const Navbar = () => {
    return (
        <div>
            <div className="nav-main">
               <div className="icon">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Imgur_Logo_Light.svg/1200px-Imgur_Logo_Light.svg.png"></img>
               </div>
                 <div className="new-post">
                   <Link to="newpost"> <button className="new-bt"> NewPost</button></Link>
                
                </div>
                  <div className="wrap">
                      <div classNasearchme="">
                         <input type="text" className="searchTerm" placeholder="Images,#tags,users oh my!"></input>
                      </div>
                  </div>
                   

                 <div className="leader-icon">
            
                 </div>
                 <div className="nav-bt">
                     <button className="s-in">Ad Free</button>
                        <Link to="login"><button className="text">Signin</button></Link>
                    <Link to="signup"> <button className="s-up"> SignUp</button> </Link>


                 </div>
            </div>

           <div>
                 <Header /> 
                 

                 
           </div>

        </div>

        
    )
}

export default Navbar;