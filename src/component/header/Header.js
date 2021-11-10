import React from 'react'
import Card from '../card/Card';
import "./header.css";

export const Header = (props) => {
    return (
        <div className="header-main">
            <h2>Life is ten percent what happens to you and ninety percent memes.
            </h2>

       <div className="head-text-right">
           <p>Explore Tags</p>
       </div>
       <div className="head-text-left">
           <p>more tags+ </p>
       </div>
       

       <div className="head-card">
           <Card  imgsrc="https://source.unsplash.com/weekly?color" text="Memes" para="84780 Post" />   
           <Card  imgsrc="https://source.unsplash.com/weekly?inspriring" text="Inspiring" para="282152 Post" />       
           <Card  imgsrc="https://source.unsplash.com/weekly?cute " text="Cute" para="78375 Posts" />       
           <Card  imgsrc="https://source.unsplash.com/weekly?food" text="Food" para="15251  Post" />       
           <Card  imgsrc="https://source.unsplash.com/weekly?cat " text="Cat" para="75151 Posts" />       
           <Card  imgsrc="" text="Cat" para="75151 Posts" />       

       </div>
         
            
        </div>
        
    )
}
export default Header;
