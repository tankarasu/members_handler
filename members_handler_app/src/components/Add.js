import React from "react";
import add from "../images/add.png";

export default function Add({ addContact }) {
  return (
    <div className="col-1 p-0 mr-2">
      <img src={add} alt="ajouter" onClick={addContact}></img>
    </div>
  );
}
