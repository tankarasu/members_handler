import React from "react";
import Add from "../components/Add";
import SearchBar from "../components/SearchBar";

export default function Header({
  addModal,
  addContact,
  userList,
  handleAddChange,
  handleTest,
  searchValue,
  abortSearch,
}) {
  return (
    <div className="main-header">
      <header className="row col-12 ">
        <h1 className="ml-2 text-white">Contacts:</h1>
        <Add addModal={addModal} addContact={addContact} />
        <SearchBar
          handleTest={handleTest}
          searchValue={searchValue}
          abortSearch={() => abortSearch()}
        />
      </header>
    </div>
  );
}
