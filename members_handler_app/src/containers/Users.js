import React, { Component } from "react";
import Member from "../components/Member";

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

  render() {
    const { userList } = this.props;
    return (
      <div className="col-12">
        <Member userList={userList} />
      </div>
    );
  }
}
