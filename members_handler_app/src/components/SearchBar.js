import React from "react";

export default function SearchBar({ searchValue, handleTest, abortSearch }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        name=""
        id=""
        placeholder="recherchez ..."
        onChange={(e) => handleTest(e)}
        value={searchValue}
      />

      <button
        onClick={abortSearch}
        
      >
        X
      </button>
    </div>
  );
}
