import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useState } from "react";

const EditMember = () => {
  const [id, setId] = useState("");
  const [memId, setMemId] = useState("");
  const [memName, setMemName] = useState("");
  const [age, setAge] = useState("");
  const [phnm, setPhnm] = useState("");
  const [address, setAddress] = useState("");
  const [isPresent, setIsPresent] = useState(false);
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
  const editMember = async () => {
    const memberId = id;
    try {
      const memberDocRef = doc(db, "members", memberId);
      const memExist = await getDoc(memberDocRef);
      if (memExist.exists()) {
        setIsPresent(true);
        const memSnap = await getDoc(memberDocRef);
        const props = memSnap.data();

        setMemId(props.memberId);
        setMemName(props.memberName);
        setAge(props.memberAge);
        setPhnm(props.phoneNumber);
        setAddress(props.memberAddress);
      } else {
        alert("Member does not exist.");
      }
    } catch (error) {
      console.error("Error retrieving member data:", error.message);
    }
  };

  const updateFirestore = async () => {
    try {
      const memberDocRef = doc(db, "members", id);
      const memExist = await getDoc(memberDocRef);

      if (memExist.exists()) {
        setIsPresent(true);

        await updateDoc(memberDocRef, {
          memberName: memName,
          memberAge: age,
          phoneNumber: phnm,
          memberAddress: address,
        });
        alert("Member Details updated successfully!");
      } else {
        alert("Member does not exist.");
      }
    } catch (error) {
      console.error("Error updating member data:", error.message);
    }
  };

  return (
    <div className="removeMember">
      Edit Member
      <form>
        <label>Member ID</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            editMember();
          }}
        >
          Edit
        </button>
      </form>
      {isPresent && (
        <form>
          <label>Member Id</label>
          <input
            disabled={true}
            type="text"
            required
            value={memId || ""}
            onChange={(e) => setMemId(e.target.value)}
          />

          <label>Name</label>
          <input
            type="text"
            required
            value={memName || ""}
            onChange={(e) => setMemName(e.target.value)}
          />

          <label>Age</label>
          <input
            type="text"
            required
            value={age || ""}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Phone Number</label>
          <input
            type="text"
            required
            value={phnm || ""}
            onChange={(e) => setPhnm(e.target.value)}
          />

          <label>Address</label>
          <input
            type="text"
            required
            value={address || ""}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              updateFirestore();
            }}
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default EditMember;
