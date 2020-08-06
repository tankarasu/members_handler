import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Users from "./containers/Users";
import Header from "./containers/Header";

import Modal from "./components/Modal";
import AddModal from "./components/AddModal";
import ModifyModal from "./components/ModifyModal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      name: "",
      lastName: "",
      bornAt: "",
      adress: "",
      zip: "",
      city: "",
      tel1: "",
      tel2: "",
      eMail: "",
      userId: "",
      uniqUser: { name: "", id: "" },
      deleteModal: false,
      addModal: false,
      modifyModal: false,
      searchValue: "",
    };
  }

  addContact = (e) => {
    e.preventDefault();
    this.setState({ addModal: !this.state.addModal });
  };

  //member-user-
  modifyModal = (e) => {
    let id = e.target.attributes.id.value;
    let contact = this.state.userList[id];
    let {
      name,
      lastName,
      bornAt,
      adress,
      city,
      zip,
      eMail,
      tel1,
      tel2,
    } = contact;
    this.setState({
      modifyModal: true,
      uniqUser: { id: id },
      name,
      lastName,
      bornAt,
      adress,
      city,
      zip,
      eMail,
      tel1,
      tel2,
    });
  };

  deleteContact = (e) => {
    e.preventDefault();
    let id = e.target.attributes.id.value;
    this.setState({
      deleteModal: !this.state.deleteModal,
      uniqUser: { name: this.state.userList[id].name, id: id },
    });
  };
  abortSearch = () => {
    this.setState({ searchValue: "" });
  };

  abortDelete = (e) => {
    e.preventDefault();
    this.setState({
      deleteModal: false,
      uniqUser: { name: "", id: "" },
    });
  };

  abortModify = (e) => {
    e.preventDefault();
    this.setState({
      modifyModal: false,
      name: "",
      lastName: "",
      bornAt: "",
      adress: "",
      zip: "",
      city: "",
      tel1: "",
      tel2: "",
      eMail: "",
    });
  };

  abortAdd = (e) => {
    e.preventDefault();
    this.setState({ addModal: false });
  };

  confirmAddContact = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      lastName: this.state.lastName,
      bornAt: this.state.bornAt,
      adress: this.state.adress,
      zip: this.state.zip,
      city: this.state.city,
      tel1: this.state.tel1,
      tel2: this.state.tel2,
      eMail: this.state.eMail,
    };

    fetch(`http://dry-forest-32366.herokuapp.com/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((response) => console.log("response", response))
      .catch((error) => {
        console.error("Error:", error);
      })
      .then(() => {
        this.handleClick();
      });

    this.setState({
      addModal: false,
      name: "",
      lastName: "",
      bornAt: "",
      adress: "",
      zip: "",
      city: "",
      tel1: "",
      tel2: "",
      eMail: "",
    });
  };

  confirmModifyContact = (e) => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      lastName: this.state.lastName,
      bornAt: this.state.bornAt,
      adress: this.state.adress,
      zip: this.state.zip,
      city: this.state.city,
      tel1: this.state.tel1,
      tel2: this.state.tel2,
      eMail: this.state.eMail,
    };

    fetch(
      `http://dry-forest-32366.herokuapp.com/api/users/${this.state.uniqUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      }
    )
      .then(() => {
        this.handleClick();
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    this.setState({
      modifyModal: false,
      name: "",
      lastName: "",
      bornAt: "",
      adress: "",
      zip: "",
      city: "",
      tel1: "",
      tel2: "",
      eMail: "",
    });
  };

  confirmDelete = (e) => {
    e.preventDefault();

    fetch(
      `http://dry-forest-32366.herokuapp.com/api/users/${this.state.uniqUser.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => JSON.stringify(response))
      .then(() => {
        this.handleClick();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    this.setState({
      userId: "",
      deleteModal: false,
      uniqUser: { name: "", id: "" },
    });
  };

  handleAddChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleTest = (e) => {
    this.setState({
      searchValue:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
  };

  handleClick() {
    axios
      .get("http://dry-forest-32366.herokuapp.com/api/users")
      .then((response) => this.setState({ userList: [...response.data] }));
  }

  componentDidMount() {
    this.handleClick();
  }

  render() {
    let contact = {
      name: this.state.name,
      lastName: this.state.lastName,
      bornAt: this.state.bornAt,
      adress: this.state.adress,
      zip: this.state.zip,
      city: this.state.city,
      tel1: this.state.tel1,
      tel2: this.state.tel2,
      eMail: this.state.eMail,
    };

    return (
      <div className="App row m-0">
        <Header
          userList={this.state.userList}
          searchValue={this.state.searchValue}
          addModal={this.state.addModal}
          addContact={(e) => this.addContact(e)}
          handleAddChange={(e) => this.handleAddChange(e)}
          handleTest={(e) => this.handleTest(e)}
          abortSearch={() => this.abortSearch()}
        />
        {!this.state.deleteModal ? null : (
          <Modal
            user={this.state.uniqUser}
            confirmDelete={() => this.confirmDelete}
            abortDelete={() => this.abortDelete}
          />
        )}
        {!this.state.addModal ? null : (
          <AddModal
            confirmAddContact={(e) => this.confirmAddContact(e)}
            contact={contact}
            handleAddChange={(e) => this.handleAddChange(e)}
            abortAdd={(e) => this.abortAdd(e)}
            handleClick={() => this.handleClick()}
          />
        )}
        {!this.state.modifyModal ? null : (
          <ModifyModal
            confirmModifyContact={(e) => this.confirmModifyContact(e)}
            handleAddChange={(e) => this.handleAddChange(e)}
            contact={contact}
            abortModify={(e) => this.abortModify(e)}
          />
        )}
        <Users
          searchValue={this.state.searchValue}
          onLoad={this.handleClick}
          userList={this.state.userList}
          deleteContact={(e) => this.deleteContact}
          deleteModal={this.state.deleteModal}
          modifyModal={(e) => this.modifyModal(e)}
        />
      </div>
    );
  }
}
