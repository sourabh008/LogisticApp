import React, { useState } from "react";
import "./navbar.css";
import {Link} from "react-router-dom"

import HomeIcon from "@material-ui/icons/Home";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PaymentIcon from "@material-ui/icons/Payment";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

function Navbar() {
  const [flag1, setFlag1] = useState(false);
  const [flag4, setFlag4] = useState(false);
  const [flag5, setFlag5] = useState(false);
  const [flag7, setFlag7] = useState(false);
  const [flag8, setFlag8] = useState(false);
  const [flag9, setFlag9] = useState(false);
  const [flag10, setFlag10] = useState(false);

  
  const openHover1 = () => {
    console.log("fd")
    setFlag1(!flag1);
    setFlag4(false);
    setFlag5(false);
    setFlag7(false);
    setFlag8(false);
    setFlag9(false);
    setFlag10(false);
  };
  const openHover4 = () => {
    setFlag1(false);
    setFlag4(!flag4);
    setFlag5(false);
    setFlag7(false);
    setFlag8(false);
    setFlag9(false);
    setFlag10(false);
  };
  const openHover5 = () => {
    setFlag1(false);
    setFlag4(false);
    setFlag5(!flag5);
    setFlag7(false);
    setFlag8(false);
    setFlag9(false);
    setFlag10(false);
  };
  const openHover7 = () => {
    setFlag1(false);
    setFlag4(false);
    setFlag5(false);
    setFlag7(!flag7);
    setFlag8(false);
    setFlag9(false);
    setFlag10(false);
  };
  const openHover8 = () => {
    setFlag1(false);
    setFlag4(false);
    setFlag5(false);
    setFlag7(false);
    setFlag8(!flag8);
    setFlag9(false);
    setFlag10(false);
  };
  const openHover9 = (e) => {
    e.preventDefault();
    setFlag1(false);
    setFlag4(false);
    setFlag5(false);
    setFlag7(false);
    setFlag8(false);
    setFlag9(!flag9);
    setFlag10(false);
  };
  const openHover10 = (e) => {
    e.preventDefault();
    setFlag1(false);
    setFlag4(false);
    setFlag5(false);
    setFlag7(false);
    setFlag8(false);
    setFlag9(false);
    setFlag10(!flag10);
  };
  const handleClose = (event) => {
    setFlag1(false);
    setFlag4(false);
    setFlag5(false);
    setFlag7(false);
    setFlag8(false);
    setFlag9(false);
    setFlag10(false);
    return;
    // }
  };

  return (
    <div>
      <div className="navbar">
        {flag1 ? (
          <ClickAwayListener onClickAway={handleClose}>

            <div className="list1">
            {console.log("hello")}

              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}
        
        {flag4 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list4">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}
        {flag4 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list4">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}{" "}
        {flag5 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list5">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}{" "}
        {flag7 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list7">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}{" "}
        {flag8 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list8">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}
        {flag9 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list9">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}
        {flag10 ? (
          <ClickAwayListener onClickAway={handleClose}>
            <div className="list10">
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>
                </ul>
              </div>
              <div className="list_1">
                <ul>
                  <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li> <li>RendomLinks </li>{" "}
                  <li>RendomLinks </li>
                </ul>
              </div>
            </div>
          </ClickAwayListener>
        ) : (
          ""
        )}
        <Link to="/">
          <HomeIcon className="svg_icons" />
          Home Page
        </Link>
        <a onClick={openHover1}>
          <AddShoppingCartIcon className="svg_icons" />
          Orders
          <ArrowDropDownSharpIcon />
        </a>{" "}
        <Link to="/customer_support">
          <MailOutlineIcon className="svg_icons" />
          Customer Support
        </Link>{" "}
        <Link to="/dhl_notification_email">
          <MailOutlineIcon className="svg_icons" />
          DHL Notification Emails
        </Link>{" "}
        <a onClick={openHover4}>
          <PaymentIcon className="svg_icons" />
          Payments
          <ArrowDropDownSharpIcon />
        </a>{" "}
        <a onClick={openHover5}>
          <ReceiptIcon className="svg_icons" />
          Invoice
          <ArrowDropDownSharpIcon />
        </a>{" "}
        <Link to="/customer_payments">
          <PaymentIcon className="svg_icons" />
          Customer Payments
        </Link>
        <a onClick={openHover7}>
          <PaymentIcon className="svg_icons" />
          Bank Account
          <ArrowDropDownSharpIcon />
        </a>
        <a onClick={openHover8}>
          <PaymentIcon className="svg_icons" />
          OBS Menu
          <ArrowDropDownSharpIcon />
        </a>
        <a onClick={openHover9}>
          <SettingsSharpIcon className="svg_icons" />
          Settings
          <ArrowDropDownSharpIcon />
        </a>
        <a onClick={openHover10}>
          <InfoSharpIcon className="svg_icons" />
          About
          <ArrowDropDownSharpIcon />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
