import "./App.css";
import ChatRoom from "./Components/ChatRoom";
import Welcome from "./Components/Welcome";
import Navbar from "./Components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar />
      {!user ? <Welcome /> : <ChatRoom />}
    </>
  );
}

export default App;
