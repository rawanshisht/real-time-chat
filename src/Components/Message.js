import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <div
      className={`d-flex ${
        message.uid === user.uid ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="col-md-3 justify-content-center">
        <div className="row m-2 bg-white border border-primary rounded p-3 ">
          <div className="col-md-3 border border-primary rounded-circle rounded-sm bg-dark"></div>
          <div className="col-9">
            <p className="fw-bold">{message.name}</p>
            <p>{message.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;
