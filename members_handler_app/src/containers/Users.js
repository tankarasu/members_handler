import React, { Component } from "react";
import Member from "../components/Member";

export default class Users extends Component {
  render() {
    const { userList, deleteContact, deleteModal } = this.props;
    
    return (
      <div className="col-12">
        <Member
          userList={userList}
          deleteContact={deleteContact}
          deleteModal={deleteModal}
        />
      </div>
    );
  }
}
