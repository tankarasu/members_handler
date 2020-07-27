import React from "react";
import trash from "../images/trash.png";
import modify from "../images/modify.png";

export default function Member({ userList, userClick }) {
  return (
    <React.Fragment>
      <ul className="row d-flex justify-content-around">
        {userList.map((element) => {
          return (
            <li
              className="list-unstyled col-md-6 col-lg-4 contactList"
              key={element.id}
              id={element.id}
            >
              <div className="card p-1 m-1">
                <div className="row contact-header bg-secondary text-white m-0 p-1">
                  <div className="col-11 p-1 m-0 text-left contact-title">
                    {element.name} <span>Prénom</span>
                    <span className="badge bg-light text-dark ml-1">
                      {element.id}
                    </span>
                  </div>
                  <div className="col-1 p-0 m-0 ">
                    <img src={modify} alt="modifier" />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-3">
                    <img
                      className="profil"
                      src="https://via.placeholder.com/150"
                      alt="visualiser"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div className=" row col-9 contact-info">
                    <div className="col-12 text-left">
                      30.12.1979 - 40 ans
                    </div>
                    <span className="col-12 text-left">
                      60 rue Pierre Chanteloup
                    </span>
                    <span className="col-12 text-left">
                      77190 Dammarie Les Lys
                    </span>
                    <span className="col-12 text-left">Adresse 3</span>
                    <span className="col-12 text-left">Adresse 4</span>
                    <span className="col-6 text-left">01 52 56 58 54</span>
                    <span className="col-6 text-left">06 05 04 03 02</span>
                    <a href="#" className="col-12 text-left">
                      karasutan@email.com
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 contact-footer">
                    <img src={trash} className="" alt="trash" />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
