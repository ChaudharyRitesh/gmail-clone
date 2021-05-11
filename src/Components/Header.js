import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../features/userSlice";
import logo from "../assets/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { auth } from "../firebase";
import "../styles/Header.css";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    console.log("logout");
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <IconButton className="icon">
            <MenuIcon />
          </IconButton>
          <img src={logo} alt="gmail logo" />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="search mail" />
          <ArrowDropDownIcon className="dropdown" />
        </div>
        <div className="header__right">
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <Avatar onClick={signOut} src={user?.photoURL} />
          </IconButton>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Header;
