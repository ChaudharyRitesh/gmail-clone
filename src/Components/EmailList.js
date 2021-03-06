import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import RefreshIcon from "@material-ui/icons/Refresh";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "../firebase";
import "../styles/EmalList.css";

function EmailList() {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timeStamp", "desc")
      .onSnapshot(snapshot =>
        setEmail(
          snapshot.docs.map(doc => [
            {
              id: doc.id,
              data: doc.data(),
            },
          ])
        )
      );
  }, []);

  return (
    <div className="EmailList">
      <div className="EmailList__settings">
        <div className="EmailList__settings--left">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="EmailList__setting--right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="EmailList__section">
        <Section Icon={InboxIcon} title="Primay" color="#D93025" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotion" color="#188038" />
      </div>
      <div className="EmailList__List">
        {email.map(({ id, data: { to, subject, message, timeStamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timeStamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
