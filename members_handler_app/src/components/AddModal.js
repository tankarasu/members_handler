import React, { Component } from "react";

export default class AddModal extends Component {

  render() {
    let { handleAddChange, contact, abortAdd, confirmAddContact } = this.props;

    return (
      <div className="deleteModal">
        <h4 className="bg-dark text-white">Ajouter un contact</h4>
        <form className="" action="" method="POST">
          <div className="form-row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={handleAddChange}
                name="name"
                value={contact.name}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={handleAddChange}
                name="lastName"
                value={contact.lastName}
              />
            </div>
          </div>
          <div className="form-row">
            <label className="col-3" htmlFor="bornAt">
              né(e) le
            </label>
            <input
              type="date"
              className="form-control col-9"
              id="bornAt"
              placeholder="JJ/MM/AAAA"
              onChange={handleAddChange}
              name="bornAt"
              value={contact.bornAt}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="adresse ex: 15 rue des roses"
              onChange={handleAddChange}
              name="adress"
              value={contact.adress}
            />
          </div>
          <div className="form-row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="ZIP-Code Postal"
                onChange={handleAddChange}
                name="zip"
                value={contact.zip}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Ville"
                onChange={handleAddChange}
                name="city"
                value={contact.city}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Telephone 1"
                onChange={handleAddChange}
                name="tel1"
                value={contact.tel1}
              />
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Telephone 2"
                onChange={handleAddChange}
                name="tel2"
                value={contact.tel2}
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="eMail">e-mail</label>
            <input
              type="email"
              className="form-control"
              id="eMail"
              placeholder="adresse@domaine.com"
              onChange={handleAddChange}
              name="eMail"
              value={contact.eMail}
            />
          </div>
        </form>
        <div>
          <button onClick={(e) => confirmAddContact(e)}>Confirmer</button>
          <button onClick={(e) => abortAdd(e)}>Annuler</button>
        </div>
      </div>
    );
  }
}
