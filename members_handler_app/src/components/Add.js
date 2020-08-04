import React from "react";
import add from "../images/add.png";

export default function Add({ addContact }) {
  return <img src={add} alt="ajouter" onClick={addContact}></img>;
}
