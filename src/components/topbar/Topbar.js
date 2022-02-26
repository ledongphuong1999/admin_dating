import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ArrowDropDown } from "@material-ui/icons";
import avtImg from '../../assets/avt.png'
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Vie-dating Admin</span>
        </div>
        <div className="topRight">
          <Settings />
          <div className="topbarIconContainer">
              <span>Log out</span>
          </div>
          <img src={avtImg} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
