import React, { useEffect, useRef } from "react";
import "./RemoveMember.css";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db_firebase } from "../../../utils/firebase";

const RemoveMember = () => {
  const id = useRef();
  const removeMember = async () => {
    const db = db_firebase;
    const memberId = id.current.value;
    try {
      const memberDocRef = doc(db, "members", memberId);
      const memExist = await getDoc(memberDocRef);
      if (memExist.exists()) {
        await deleteDoc(memberDocRef);
        alert("Member removed successfully!");
      } else {
        alert("Member does not exist.");
      }
    } catch (error) {
      console.error("Error retrieving member data:", error.message);
    }
  };
  const init = () => {};
  const sendBack = () => {
    alert("Access Restricted");
    window.location.href = "/";
  };

  useEffect(() => {
    const isLogin = localStorage.userId === "000";
    console.log(isLogin);
    isLogin ? init() : sendBack();
  });
  return (
    <div className="removeMember">
      Remove Member
      <form>
        <label>Member ID</label>
        <input type="number" ref={id} />
        <button
          onClick={(e) => {
            e.preventDefault();
            removeMember();
          }}
        >
          Remove
        </button>
      </form>
    </div>
  );
};

export default RemoveMember;
