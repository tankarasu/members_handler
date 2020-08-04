import React, { Component } from "react";
import Member from "../components/Member";

export default class Users extends Component {
  render() {
    const {
      userList,
      deleteContact,
      deleteModal,
      modifyModal,
      searchValue,
    } = this.props;

    return (
      <div className="col-12 userList">
        <Member
          searchValue={searchValue}
          userList={userList}
          deleteContact={deleteContact}
          deleteModal={deleteModal}
          modifyModal={modifyModal}
        />
      </div>
    );
  }
}
