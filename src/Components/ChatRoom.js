import SendMessage from "./SendMessage";
import Message from "./Message";
import { useEffect, useState, useRef } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
      scroll.current.scrollIntoView({ behavior: "smooth" });
    });
    return () => unsubscribe;
  }, []);
  const styleContainer = {
    backgroundColor: "lightblue",
  };
  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div>
            {messages?.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            <span ref={scroll}></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-block">
            <SendMessage scroll={scroll} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatRoom;
