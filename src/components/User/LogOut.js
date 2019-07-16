import React from "react";
import firebase from "firebase";
import { Menu } from "semantic-ui-react";
const logOutUser = () => {
  firebase.auth().signOut();
};
const LogOut = () => {
  return <Menu.Item name="Log Out" onClick={logOutUser} />;
};
export default LogOut;
