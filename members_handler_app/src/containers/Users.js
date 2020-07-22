import React, { Component } from "react";
import axios from "axios";
import Member from "../components/Member";
import SideBar from "./SideBar";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      inputValue: "",
      userId: "",
      uniqUser: { name: "", id: "" },
    };
  }
  handleInputValue(e) {
    this.setState({ inputValue: e.target.value });
  }
  handleIdValue(e) {
    this.setState({ userId: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = { name: this.state.inputValue };

    fetch("http://localhost:3030/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    this.setState({ inputValue: "" });
  }

  handleClick() {
    axios
      .get("http://localhost:3030/api/users")
      .then((response) => this.setState({ userList: [...response.data] }));
  }

  userClick(e) {
    e.preventDefault();
    this.setState({ userId: e.target.parentElement.id });

    fetch(`http://localhost:3030/api/users/${e.target.parentElement.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        this.setState({ uniqUser: { name: data.name, id: data.id } });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    this.setState({ inputValue: "", userId: "" });
  }

  handleModify(e) {
    e.preventDefault();

    const data = { name: this.state.inputValue };
    fetch(`http://localhost:3030/api/users/${this.state.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    this.setState({ inputValue: "", userId: "" });
  }

  handleDelete(e) {
    e.preventDefault();

    fetch(`http://localhost:3030/api/users/${this.state.userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => JSON.stringify(response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    this.setState({ inputValue: "", userId: "" });
  }

  render() {
    return (
      <div>
        <h1>Gestionnaire de membres</h1>
        <button onClick={() => this.handleClick()}>Afficher les membres</button>
        <div className="membre">
          <Member
            userList={this.state.userList}
            userClick={(e) => this.userClick(e)}
          />
          <form action="">
            <input
              type="text"
              name="name"
              onChange={(e) => {
                this.handleInputValue(e);
              }}
              value={this.state.inputValue}
            />
            <input
              type="submit"
              value="Ajouter"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            />
          </form>
          <form action="">
            <input
              type="text"
              name="id"
              onChange={(e) => {
                this.handleIdValue(e);
              }}
              value={this.state.userId}
            />
            <button
              onClick={(e) => {
                this.handleModify(e);
              }}
            >
              Modifier
            </button>
            <button
              onClick={(e) => {
                this.handleDelete(e);
              }}
            >
              Supprimer
            </button>
          </form>
        </div>
        <div>
          <SideBar user={this.state.uniqUser} />
        </div>
      </div>
    );
  }
}
