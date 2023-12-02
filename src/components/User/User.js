import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db_firebase } from "../../utils/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const User = () => {
  const { userId } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDOB] = useState("");
  const [id, setID] = useState("");
  const [phone, setPhone] = useState("");
  const [loan, setLoan] = useState("");

  const db = db_firebase;
  const init = async () => {
    if (!localStorage.getItem("userId")) {
      alert("Logget Out!");
      return;
    }
    const member = (await getDoc(doc(db, "members", userId))).data();
    setName(member.memberName);
    setAddress(member.memberAddress);
    setDOB(member.memberDOB);
    setID(member.memberId);
    setPhone(member.phoneNumber);
    setLoan(member.memberLoan);
  };
  useEffect(() => {
    const loggedInUserId = localStorage.getItem("userId");
    if (loggedInUserId !== userId) {
      alert("Access Restricted");
      window.location.href = loggedInUserId ? `/user/${loggedInUserId}` : "/";
      return;
    }
    init();
  }, []);
  const updateFirestore = async () => {
    try {
      const memberDocRef = doc(db, "members", id);
      const memExist = await getDoc(memberDocRef);

      if (memExist.exists()) {
        const formattedDate = dob
          ? new Date(dob).toISOString().slice(0, 10)
          : null;
        if (!name || !formattedDate || !phone || !address || !loan) {
          alert("Please check for format and empty fields");
          return;
        }
        await updateDoc(memberDocRef, {
          memberName: name,
          memberDOB: formattedDate,
          phoneNumber: phone,
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
    <div className="addMem">
      <form>
        <label>ID</label>

        <input type="text" disabled value={id} />
        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Address</label>

        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <label>DOB</label>

        <input
          type="date"
          value={dob || ""}
          onChange={(e) => setDOB(e.target.value)}
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Loans</label>
        <input type="text" value={loan} disabled />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            updateFirestore();
          }}
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default User;
