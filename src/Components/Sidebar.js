import React from "react";
import { useDispatch } from "react-redux";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import { openSendMessage } from "../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="Sidebar">
      <Button
        startIcon={<AddIcon className="icon" />}
        className="Sidebar-compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={WatchLaterIcon} title="Snoozed" number={14} />
      <SidebarOption Icon={DraftsIcon} title="Draft" number={19} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={19} />
      <SidebarOption Icon={SendIcon} title="Sent" number={19} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="Sidebar__footer">
        <div className="footer__icon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
