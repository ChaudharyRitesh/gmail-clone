import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import { selectMail } from "../features/mailSlice";
import "../styles/EmailRow.css";

function EmailRow({ title, id, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail(title, id, subject, description, time));
    history.push("/mail");
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow__link" onClick={openMail}>
        <div className="emailRow__title">
          <h3>{title} </h3>
        </div>
        <div className="emailRow__message">
          <h4>
            {subject} -
            <span className="emailRow__description"> {description}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
