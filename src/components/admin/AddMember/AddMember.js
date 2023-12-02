import React, { useEffect, useRef } from "react";
import "./AddMember.css";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db_firebase } from "../../../utils/firebase";

const AddMember = () => {
  const db = db_firebase;
  const memId = useRef();
  const memName = useRef();
  const dob = useRef();
  const phnm = useRef();
  const address = useRef();
  const loan = useRef();

  const toFirebase = async () => {
    const memberId = memId.current.value;
    const memberName = memName.current.value;
    const memberDOB = dob.current.value;
    const phoneNumber = phnm.current.value;
    const memberAddress = address.current.value;
    const memberLoan = loan.current.value;
    if (
      !memberId ||
      !memberName ||
      !memberDOB ||
      !phoneNumber ||
      !memberAddress ||
      !memberLoan
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
        memberDOB,
        phoneNumber,
        memberAddress,
        memberLoan,
      });
      alert("Member Added!");
      //   console.log("Document successfully written!");
      memId.current.value = "";
      memName.current.value = "";
      dob.current.value = "";
      phnm.current.value = "";
      address.current.value = "";
      loan.current.value = "";
    } catch (e) {
      console.error("Error writing document: ", e);
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
    <div className="addMem">
      Add New Member
      <form>
        <label>Member Id</label>
        <input ref={memId} type="number" required />

        <label>Name</label>
        <input ref={memName} type="text" required />

        <label>DOB</label>
        <input ref={dob} type="date" required />

        <label>Phone Number</label>
        <input ref={phnm} type="text" required />

        <label>Address</label>
        <input ref={address} type="text" required />

        <label>Loan</label>
        <input ref={loan} type="text" required />

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
