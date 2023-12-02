import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db_firebase } from "../../../utils/firebase";

const EditMember = () => {
  const [id, setId] = useState("");
  const [memId, setMemId] = useState("");
  const [memName, setMemName] = useState("");
  const [dob, setDOB] = useState("");
  const [phnm, setPhnm] = useState("");
  const [address, setAddress] = useState("");
  const [loan, setLoan] = useState("");

  const [isPresent, setIsPresent] = useState(false);
  const db = db_firebase;
  const editMember = async () => {
    const memberId = id;
    try {
      const memberDocRef = doc(db, "members", memberId);
      const memExist = await getDoc(memberDocRef);
      if (memExist.exists()) {
        setIsPresent(true);
        const memSnap = await getDoc(memberDocRef);
        const props = memSnap.data();
        console.log(props);

        setMemId(props.memberId);
        setMemName(props.memberName);
        setDOB(props.memberAge);
        setPhnm(props.phoneNumber);
        setAddress(props.memberAddress);
        setLoan(props.memberLoan);
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

        console.log(loan);
        const formattedDate = dob ? new Date(dob) : null;
        if (!memName || !formattedDate || !phnm || !address || !loan) {
          alert("Please check for format and empty fields");
          return;
        }
        await updateDoc(memberDocRef, {
          memberName: memName,
          memberDOB: formattedDate,
          phoneNumber: phnm,
          memberAddress: address,
          memberLoan: loan,
        });
        alert("Member Details updated successfully!");
      } else {
        alert("Member does not exist.");
      }
    } catch (error) {
      console.error("Error updating member data:", error.message);
    }
  };
  const init = () => {};
  const sendBack = () => {
    alert("Access Restricted");
    window.location.href = "/";
  };

  useEffect(() => {
    const isLogin = localStorage.userId === "000";
    // console.log(isLogin);
    isLogin ? init() : sendBack();
  });
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

          <label>DOB</label>
          <input
            type="date"
            required
            value={dob || ""}
            onChange={(e) => setDOB(e.target.value)}
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

          <label>Loan</label>
          <input
            type="text"
            required
            value={loan || ""}
            onChange={(e) => setLoan(e.target.value)}
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
