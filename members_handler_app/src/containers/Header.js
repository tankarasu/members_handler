import React from "react";
import SearchBar from "../components/SearchBar";
import Add from "../components/Add";

export default function Header() {
  return (
    <header className="row col-12">
      <h1 className="ml-2 text-white">Contacts:</h1>
      <SearchBar />
      <Add />
    </header>
  );
}
