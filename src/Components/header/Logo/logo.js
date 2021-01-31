import React from "react";
import "./logo.css";
import img from "./redditLogo.png";

export const Logo = ()=>{
    return (
        <div>
            <img src={img} alt="logo"/>
            <h1><span>Reddit</span>Minimal</h1>
        </div>
    )
}

