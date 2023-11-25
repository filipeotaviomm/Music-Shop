import React from "react";
import UserProfile from "../../pages/UserProfile";

function ProfileTemplate(props: { children: React.ReactNode }) {
  return <UserProfile>{props.children}</UserProfile>;
}

export default ProfileTemplate;
