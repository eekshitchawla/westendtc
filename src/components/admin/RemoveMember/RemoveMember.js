import React, { useRef } from "react";
import "./RemoveMember.css";
import { initializeApp } from "firebase/app";
import { deleteDoc, doc, getDoc, getFirestore } from "firebase/firestore";

const RemoveMember = () => {
  const id = useRef();
  const removeMember = async () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDvXEVHj8jIG19gVRZ5GBWChBBhZk9uwUA",
      authDomain: "westend-tc.firebaseapp.com",
      projectId: "westend-tc",
      storageBucket: "westend-tc.appspot.com",
      messagingSenderId: "539923039306",
      appId: "1:539923039306:web:9b5954217ce1c55ca552b3",
      measurementId: "G-K65TR7EZVF",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
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
