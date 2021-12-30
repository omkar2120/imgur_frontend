import React,{useState} from 'react'
import "./newpost.css";
import { TiImage } from "react-icons/ti"
import { IoArrowBackOutline } from "react-icons/io5"
import { Link } from 'react-router-dom';

const PASTEIMAGE = ('https://www.jaipuriaschoolkanpurroad.in/wp-content/uploads/2016/11/blank-img.jpg')

export const Newpost = (e) => {
    const [pasteImage, setpasteImage] = useState(PASTEIMAGE)

    return (
        <div className="new-post-main">
       <Link to=""> <button className="nav-cut"><IoArrowBackOutline/></button></Link>
<form onSubmit>

            <div className="new-one">
               <div className="new-two">
               
                  <div className="new-text">
                      <p style={{textAlign:"center"}}>Drop images here</p>
                      <img src={pasteImage}/>
                  </div>
               </div>
               
               <div className="new-three">
                  <strong> <p className="new-icon"><TiImage />Choose Photo /Vedio</p></strong><br />
                  <p className="or">or</p><br /><br />
                  <input onChange={(e) => pasteImage} className="paste-but"/>
                  <button className="paste-but" >Paste image or Url</button>
                     
               </div>


            
            </div>
            <p className="or">By creating a post, you agree to Imgur's Terms of Service and Privacy Policy</p>
            </form>
        </div>
    )
}

export default Newpost;