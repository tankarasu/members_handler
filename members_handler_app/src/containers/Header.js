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
      <header className="row">
        <h1 className="ml-4 p-0 text-white col-2">Contacts:</h1>
        <SearchBar
          handleTest={handleTest}
          searchValue={searchValue}
          abortSearch={() => abortSearch()}
        />
        <Add addModal={addModal} addContact={addContact} />
      </header>
    </div>
  );
}
