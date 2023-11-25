import React, { useRef, useState } from "react";
import { db_firebase } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import "./Login.css";

const Login = () => {
  const [memId, setMemId] = useState("");
  const [phnm, setPhnm] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const auth = async () => {
    const db = db_firebase;
    const memRef = await (isAdmin
      ? getDoc(doc(db, "admin", memId))
      : getDoc(doc(db, "members", memId)));
    if (memRef.exists()) {
      const phoneNumber = memRef.data().phoneNumber;
      if (phoneNumber === phnm) {
        localStorage.setItem("userId", memId);
        console.log(localStorage.getItem("userId"));
        alert("User Logged In!");
        isAdmin
          ? (window.location.href = "/admin")
          : (window.location.href = "/");
      } else {
        alert("Password Incorrect");
      }
    } else {
      alert("Member Id doesnt exists");
    }
  };
  return (
    <div className="addMem">
      LOGIN
      <form id="radioform">
        <div>
          <input
            type="radio"
            name="userType"
            onChange={() => setIsAdmin(true)}
          />
          <p>Admin</p>
        </div>
        <div>
          <input
            type="radio"
            name="userType"
            onChange={() => setIsAdmin(false)}
          />
          <p>Member</p>
        </div>
      </form>
      <form>
        <label>Mem Id</label>
        <input
          type="text"
          required
          onChange={(e) => setMemId(e.target.value)}
        />
        <label>Password(Phone Number)</label>
        <input
          type="password"
          required
          onChange={(e) => setPhnm(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            auth();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Login;
