import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Main from "./Main";
function Home(props) {
  const [googleSignInUserVal, setGoogleSignInUserVal] = useState();
  const onSignUpWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setGoogleSignInUserVal(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setGoogleSignInUserVal(localStorage.getItem("email"));
  });
  return (
    <div style={{ display: "flex", margin: "40px" }}>
      <div>
        {googleSignInUserVal ? (
          <Main />
        ) : (
          <div className="home-container">
            <div>
              <img src="https://img.freepik.com/premium-vector/girls-using-smartphone-online-news_24908-68236.jpg?w=740" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",

                backgroundColor: "rgba(232, 18, 18, 0.963)",
              }}
            >
              <h1 style={{ color: "white", fontFamily: "serif" }}>
                Hello! NEWS Today
              </h1>
              <p style={{ color: "white", fontWeight: "bold" }}>
                Let's know what's happening in the world
              </p>

              <button className="button" onClick={onSignUpWithGoogle}>
                SignUp with Google
              </button>

              <Link to="/sign-up-manually">
                <button className="button">SignUP Manually</button>
              </Link>

              <p style={{ color: "white", fontWeight: "bold" }}>
                Already have an account?{" "}
                <Link to="/sign-in">
                  <span>SignIn?</span>
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
