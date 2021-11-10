import React from 'react'
import "./newpost.css";
import { TiImage } from "react-icons/ti"
import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from 'react-router-dom';
export const Newpost = () => {
    return (
        <div className="new-post-main">
       <Link to=""> <button className="nav-cut"><IoArrowBackOutline/></button></Link>

            <div className="new-one">
               <div className="new-two">
                  <div className="new-text">
                      <p style={{textAlign:"center"}}>Drop images here</p>
                  </div>
               </div>
               
               <div className="new-three">
                  <strong> <p className="new-icon"><TiImage />Choose Photo /Vedio</p></strong><br />
                  <p className="or">or</p><br /><br />
                  <button className="paste-but">Paste image or Url</button>
                     
               </div>


            
            </div>
            <p className="or">By creating a post, you agree to Imgur's Terms of Service and Privacy Policy</p>
        </div>
    )
}

export default Newpost;