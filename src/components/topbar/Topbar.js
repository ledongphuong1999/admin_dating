import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ArrowDropDown } from "@material-ui/icons";
import avtImg from '../../assets/avt.png'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Topbar() {
  let history = useHistory()
  let logout = () => {
    localStorage.removeItem("accessToken")
    history.replace("/login")
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Vie-dating Admin</span>
        </div>
        <div className="topRight">
          <Settings />
          <button className="userLogoutButton" onClick={logout}>Logout</button>
          <img src={avtImg} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
