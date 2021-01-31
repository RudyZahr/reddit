import React from "react";
import "./searchBar.css";
import img from "./search.png"

export const SearchBar = () => {
    return (
        <form>
            <input type="text" name="search" placeholder="Search" className="text"/>
            <input type="image" src={img} className="image"/>
        </form>
    )
}