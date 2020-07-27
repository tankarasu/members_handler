import React, { Component } from "react";

export default class Handler extends Component {
  render() {
    const {
      handleSubmit,
      handleInputValue,
      name,
      handleIdValue,
      id,
      handleModify,
      handleDelete,
    } = this.props;
    return (
      <form className="">
        <div className="row justify-content-center">
          <input
            className="col-12"
            name="name"
            type="text"
            placeholder="name"
            onChange={(e) => handleInputValue(e)}
            value={name}
          />
        </div>
        <div className="row justify-content-center">
          <input
            className="col-12"
            name="id"
            type="text"
            placeholder="id"
            onChange={(e) => handleIdValue(e)}
            value={id}
          />
        </div>
        <div className="row justify-content-center">
          <button
            className="col-4 "
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Ajouter
          </button>
          <button className="col-4 " onClick={(e) => handleModify(e)}>
            Modifier
          </button>
          <button
            className="col-4 bg-danger text-white"
            onClick={(e) => handleDelete(e)}
          >
            Supprimer
          </button>
        </div>
      </form>
    );
  }
}
