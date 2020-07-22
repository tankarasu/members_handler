import React from "react";

export default function Member({ userList, userClick }) {
  return (
    <ul>
      {userList.map((element) => {
        return (
          <li key={element.id} id={element.id}>
            <span>{element.name} </span>
            <button onClick={(e) => userClick(e)}>open</button>
          </li>
        );
      })}
    </ul>
  );
}
