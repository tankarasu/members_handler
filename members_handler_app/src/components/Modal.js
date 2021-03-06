import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { confirmDelete, abortDelete } = this.props;
    return (
      <div className="deleteModal">
        <p>
          Voulez-vous réellement supprimer {this.props.user.name} de vos
          contacts?
        </p>
        <button onClick={confirmDelete()}>Confirmer</button>
        <button onClick={abortDelete()}>Annuler</button>
      </div>
    );
  }
}
