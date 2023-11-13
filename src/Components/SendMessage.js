import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const SendMessage = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message...");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    console.log("uid", uid, displayName);
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };
  return (
    <>
      <div className="row">
        <div className="col-md-12 ">
          <form onSubmit={(e) => handleSendMessage(e)} className="d-flex">
            <label htmlFor="messageInput" hidden>
              Enter Message
            </label>
            <input
              id="messageInput"
              name="messageInput"
              type="text"
              placeholder="type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control flex-grow-1 m-2 border border-primary"
            ></input>
            <button type="submit" className="btn btn-primary w-25">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default SendMessage;
