import React from "react";

export default function SideBar({user}) {
  return (
    <div>
      {user.name}-{user.id}
    </div>
  );
}
