import React from 'react';
import "./social.css";
import { FaFacebookF , FaTwitter , FaApple , FaGoogle } from "react-icons/fa";
import { DiYahooSmall } from "react-icons/di";

export const Social = () => {
    return (
        <div>
        <div className="log-sym">
        <a href="https://www.facebook.com/"><button className="log-but"><FaFacebookF /></button></a>
        <a href="https://twitter.com/?lang=en"><button className="log-but"><FaTwitter /></button></a>
        <a href="https://www.apple.com/in/"><button className="log-but"><FaApple /></button></a>
        <a href="https://www.google.co.in/"><button className="log-but"><FaGoogle /></button></a>
        <a href="https://in.search.yahoo.com/?fr2=inr"><button className="log-but"><DiYahooSmall /></button></a>
        
     
     </div>
        </div>
    )
}

export default Social;