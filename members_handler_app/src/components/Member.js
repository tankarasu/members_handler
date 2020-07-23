import React from "react";
import share from "../images/share.png";

export default function Member({ userList, userClick }) {
  return (
    <ul>
      {userList.map((element) => {
        return (
          <li key={element.id} id={element.id}>
            <span>{element.name} </span>
            <img
              src={share}
              alt="visualiser"
              width="15px"
              height="15px"
              onClick={(e) => userClick(e)}
            />
          </li>
        );
      })}
    </ul>
  );
}
