import React from "react";
import trash from "../images/trash.png";
import modify from "../images/modify.png";

export default function Member({ userList, deleteContact,deleteModal }) {
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
                  <div className="col-10 p-1 m-0 text-left contact-title">
                    {element.name} <span>{element.lastName}</span>
                    <span className="badge bg-light text-dark ml-2">
                      {element.id}
                    </span>
                  </div>
                  <div className="col-1 p-0 m-0 ">
                    <img src={modify} alt="modifier" />
                  </div>
                  <div className="col-1 p-0 m-0 contact-footer">
                    <img
                      src={trash}
                      className=""
                      alt="trash"
                      onClick={deleteContact()}
                      id={element.id}
                    />
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
                      {element.bornAt} - 40 ans
                    </div>
                    <span className="col-12 text-left">{element.adress}</span>
                    <span className="col-12 text-left">
                      {element.zip} {element.city}
                    </span>
                    <span className="col-6 text-left">{element.tel1}</span>
                    <span className="col-6 text-left">{element.tel2}</span>
                    <a href="#" className="col-12 text-left">
                      {element.eMail}
                    </a>
                  </div>
                </div>
                <div className="row"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
