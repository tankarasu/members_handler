import React from "react";
import SearchBar from "../components/SearchBar";

export default function Header() {
  return (
    <header className="row col-12">
      <h1 className="ml-2 text-white">Contacts:</h1>
      <SearchBar />
    </header>
  );
}
