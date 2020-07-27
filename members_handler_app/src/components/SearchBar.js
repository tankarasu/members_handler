import React from "react";
import Search from '../images/search.png'

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" name="" id="" placeholder="recherchez ..."/>
      <img src={Search} alt=""></img>
    </div>
  );
}
