import React from "react";
import cancel from "../images/cancel.png";

export default function Abecedaire({
  userList,
  handleTest,
  abortSearch,
  searchValue,
}) {
  console.log(searchValue.length);
  let alphaList = [];

  let filteredUserList = userList.filter(
    (item) =>
      (item.name !== undefined || item.name != null
        ? item.name.indexOf(searchValue) !== -1
        : false) ||
      (item.lastName !== undefined || item.lastName != null
        ? item.lastName.indexOf(searchValue) !== -1
        : false)
  );

  console.log(filteredUserList);

  filteredUserList.forEach((element) => {
    if (element.name !== null) {
      let letter = element.name[searchValue.length].toUpperCase();
      if (alphaList.indexOf(letter) === -1) {
        alphaList.push(letter);
      }
    }
    if (element.lastName !== (null || undefined)) {
      let letter = element.lastName[searchValue.length].toUpperCase();
      if (alphaList.indexOf(letter) === -1) {
        console.log("letter", letter);

        alphaList.push(letter);
      }
    }
    alphaList.sort();
    if (alphaList.indexOf("") !== -1) {
      alphaList.splice(alphaList.indexOf(""), 1);
    }
  });

  return (
    <div>
      {alphaList.map((element, index) => {
        return (
          <span
            className="searchLetters"
            key={index}
            name="searchValue"
            onClick={handleTest}
          >
            {element}
          </span>
        );
      })}
      <img src={cancel} alt="" onClick={abortSearch} />
    </div>
  );
}
