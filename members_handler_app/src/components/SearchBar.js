import React from "react";

export default function SearchBar({ searchValue, handleTest, abortSearch }) {
  return (
    <div className="searchBar col-8 p-0">
      <input
        type="text"
        name=""
        id=""
        placeholder="recherchez ..."
        onChange={(e) => handleTest(e)}
        value={searchValue}
      />

      <button onClick={abortSearch}>X</button>
    </div>
  );
}
