import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile() {

  const {user} = useContext(UserContext)  
  const {theme} = useContext(ThemeContext)
  console.log(user);
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
