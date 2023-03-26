import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignIn.css";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((err) => alert(err));
  };

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="signInScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signin}>
          Sign In
        </button>

        <h4>
          <span className="signInScreen-gray">New to Netflix? </span>
          <span className="signInScreen-link" onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
