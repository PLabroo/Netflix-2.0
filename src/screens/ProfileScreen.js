import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt="profile-avatar"
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen-signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
