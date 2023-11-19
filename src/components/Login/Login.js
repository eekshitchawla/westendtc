import React, { useState } from "react";
import { db_firebase } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const [memId, setMemId] = useState("");
  const [phnm, setPhnm] = useState("");
  const auth = async () => {
    const db = db_firebase;
    const memRef = await getDoc(doc(db, "members", memId));
    if (memRef.exists()) {
      const phoneNumber = memRef.data().phoneNumber;
      if (phoneNumber === phnm) {
        localStorage.setItem("userId", memId);
        console.log(localStorage.getItem("userId"));
        alert("User Logged In!");
        window.location.href = "/";
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
