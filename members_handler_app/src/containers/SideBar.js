import React from "react";
import Handler from "../components/Handler";

export default function SideBar({
  onAdd,
  handleInputValue,
  inputValue,
  handleIdValue,
  id,
  handleModify,
  handleDelete,
}) {
  return (
    <nav className="col-4 ">
      <Handler
        handleSubmit={onAdd}
        handleInputValue={handleInputValue}
        handleIdValue={handleIdValue}
        name={inputValue}
        id={id}
        handleModify={handleModify}
        handleDelete={handleDelete}

        /*
        id={this.state.userId}*/
      />
    </nav>
  );
}
