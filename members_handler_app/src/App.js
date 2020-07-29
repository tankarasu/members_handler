import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Users from "./containers/Users";
import Header from "./containers/Header";
/*import SideBar from "./containers/SideBar";*/
import Footer from "./containers/Footer";
import Modal from "./components/Modal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      inputValue: "",
      userId: "",
      uniqUser: { name: "", id: "" },
      deleteModal: false,
    };
  }

  deleteContact = (e) => {
    e.preventDefault();
    let id = e.target.attributes.id.value;
    this.setState({
      deleteModal: !this.state.deleteModal,
      uniqUser: { name: this.state.userList[id].name, id: id },
    });
  };

  abortDelete = (e) => {
    e.preventDefault();
    this.setState({ deleteModal: false, uniqUser: { name: "", id: "" } });
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
      inputValue: "",
      userId: "",
      deleteModal: false,
      uniqUser: { name: "", id: "" },
    });
  };

  // handleInputValue(e) {
  //   this.setState({ inputValue: e.target.value });
  // }

  // handleIdValue(e) {
  //   console.log(e)
  //   this.setState({ userId: e.target.value });
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const data = { name: this.state.inputValue };
  //   console.log("data", data);

  //   fetch("http://dry-forest-32366.herokuapp.com/api/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   this.setState({ inputValue: "" });
  // }

  handleClick() {
    axios
      .get("http://dry-forest-32366.herokuapp.com/api/users")
      .then((response) => this.setState({ userList: [...response.data] }));
  }

  // handleModify(e) {
  //   e.preventDefault();

  //   const data = { name: this.state.inputValue };
  //   fetch(
  //     `http://dry-forest-32366.herokuapp.com/api/users/${this.state.userId}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   this.setState({ inputValue: "", userId: "" });
  // }

  // handleDelete(e) {
  //   e.preventDefault();

  //   fetch(
  //     `http://dry-forest-32366.herokuapp.com/api/users/${this.state.userId}`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => JSON.stringify(response))
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   this.setState({ inputValue: "", userId: "" });
  // }

  // userClick(e) {
  //   e.preventDefault();
  //   this.setState({ userId: e.target.parentElement.id });

  //   fetch(
  //     `http://dry-forest-32366.herokuapp.com/api/users/${e.target.parentElement.id}`,
  //     {
  //       method: "GET",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("Success:", data);
  //       this.setState({
  //         uniqUser: { name: data.name, id: data.id },
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   this.setState({ inputValue: "", userId: "" });
  // }

  componentWillMount() {
    this.handleClick();
  }

  render() {
    return (
      <div className="App row m-2">
        <Header />
        {!this.state.deleteModal ? null : (
          <Modal
            user={this.state.uniqUser}
            confirmDelete={() => this.confirmDelete}
            abortDelete={() => this.abortDelete}
          />
        )}
        <Users
          onLoad={this.handleClick}
          userList={this.state.userList}
          deleteContact={(e) => this.deleteContact}
          deleteModal={this.state.deleteModal}
        />
        {/*} <SideBar
          onAdd={(e) => this.handleSubmit(e)}
          handleInputValue={(e) => this.handleInputValue(e)}
          handleIdValue={(e) => this.handleIdValue(e)}
          handleModify={(e) => this.handleModify(e)}
          handleDelete={(e) => this.handleDelete(e)}
          inputValue={this.state.inputValue}
          id={this.state.userId}
    />{*/}
        <Footer />
      </div>
    );
  }
}
