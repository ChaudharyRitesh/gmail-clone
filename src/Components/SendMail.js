import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../firebase";
import firebase from "firebase";
import "../styles/SendMail.css";

function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = formData => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timeStamp: firebase.firestore.FieldValue.serverTimeStamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendmail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To :"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendmail__error">Recipient is required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject :"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendmail__error">Subject is required</p>
        )}
        <input
          name="message"
          type="text"
          className="sendmail__messageInput"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendmail__error">Message field cannot be empty</p>
        )}

        <div className="sendmail__options">
          <Button
            // onClick={onSubmit}
            variant="contained"
            color="secondary"
            className="sendmail__button"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
