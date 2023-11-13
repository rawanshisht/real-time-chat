import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log("hi", provider);
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar navbar-light bg-white border">
      <a className="navbar-brand m-2">Real-Time Chat Room</a>
      {user ? (
        <button
          className="btn btn-danger btn-sm m-2 my-sm-1"
          type="button"
          onClick={signOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="btn btn-primary btn-sm m-2 my-sm-1"
          type="button"
          onClick={googleSignIn}
        >
          Sign In
        </button>
      )}
    </nav>
  );
};
export default Navbar;
