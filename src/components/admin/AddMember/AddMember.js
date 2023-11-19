import React, { useRef } from "react";
import "./AddMember.css";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db_firebase } from "../../../utils/firebase";

const AddMember = () => {
  const db = db_firebase;
  const memId = useRef();
  const memName = useRef();
  const age = useRef();
  const phnm = useRef();
  const address = useRef();

  const toFirebase = async () => {
    const memberId = memId.current.value;
    const memberName = memName.current.value;
    const memberAge = age.current.value;
    const phoneNumber = phnm.current.value;
    const memberAddress = address.current.value;

    if (
      !memberId ||
      !memberName ||
      !memberAge ||
      !phoneNumber ||
      !memberAddress
    ) {
      alert("Please Fill all the Details ");
      return;
    }
    const memExist = await getDoc(doc(db, "members", memberId));
    if (memExist.exists()) {
      alert("Member-Id Already Exists");
      return;
    }

    const memberDocRef = doc(db, "members", memberId);

    try {
      await setDoc(memberDocRef, {
        memberId,
        memberName,
        memberAge,
        phoneNumber,
        memberAddress,
      });
      alert("Member Added!");
      //   console.log("Document successfully written!");
      memId.current.value = "";
      memName.current.value = "";
      age.current.value = "";
      phnm.current.value = "";
      address.current.value = "";
    } catch (e) {
      console.error("Error writing document: ", e);
    }
  };

  return (
    <div className="addMem">
      Add New Member
      <form>
        <label>Member Id</label>
        <input ref={memId} type="number" required />

        <label>Name</label>
        <input ref={memName} type="text" required />

        <label>Age</label>
        <input ref={age} type="number" required />

        <label>Phone Number</label>
        <input ref={phnm} type="text" required />

        <label>Address</label>
        <input ref={address} type="text" required />

        <button
          onClick={(e) => {
            e.preventDefault();
            toFirebase();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMember;
