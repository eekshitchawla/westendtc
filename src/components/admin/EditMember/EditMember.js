import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useRef, useState } from "react";

const EditMember = () => {
  const id = useRef();
  const memId = useRef();
  const memName = useRef();
  const age = useRef();
  const phnm = useRef();
  const address = useRef();
  const [isPresent, setIsPresent] = useState(false);
  const editMember = async () => {
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
        setIsPresent(true);
        const memSnap = await getDoc(memberDocRef);
        // console.log(memSnap.data());
        const props = memSnap.data();
        console.log(props);

        memId.current = props.memberId;
        memName.current = props.memberName;
        age.current = props.memberAge;
        phnm.current = props.phoneNumber;
        address.current = props.memberAddress;
        console.log(
          "djbnfj:  ",
          memId.current,
          memName.current,
          age.current,
          phnm.current,
          address.current
        );
      } else {
        alert("Member does not exist.");
      }
    } catch (error) {
      console.error("Error retrieving member data:", error.message);
    }
  };

  return (
    <div className="removeMember">
      Edit Member
      <form>
        <label>Member ID</label>
        <input type="number" ref={id} />
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
            ref={memId}
            type="text"
            required
            value={memId.current}
            onChange={() => {}}
          />

          <label>Name</label>
          <input
            ref={memName}
            type="text"
            required
            value={memName.current}
            onChange={() => {}}
          />

          <label>Age</label>
          <input
            onChange={() => {}}
            ref={age}
            type="text"
            required
            value={age.current}
          />

          <label>Phone Number</label>
          <input
            onChange={() => {}}
            ref={phnm}
            type="text"
            required
            value={phnm.current}
          />

          <label>Address</label>
          <input
            ref={address}
            type="text"
            required
            value={address.current}
            onChange={() => {}}
          />
        </form>
      )}
    </div>
  );
};

export default EditMember;
