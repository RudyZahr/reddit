import React from "react";
import "./header.css";
import {Logo} from "./Logo/logo";
import {SearchBar} from "./SearchBar/searchBar";

export const Header = () => {
    return (
        <header>
            <Logo />
            <SearchBar />
        </header>
    )
}