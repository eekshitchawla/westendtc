import React, { useEffect, useRef, useState } from "react";
import "./admin.css";
import { db_firebase } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const Admin = () => {
  const [membersList, setMembersList] = useState(null);
  const [renderList, setRenderList] = useState(membersList);
  const searchTxt = useRef();
  const fetchMembers = async () => {
    const db = db_firebase;
    const membersRef = collection(db, "members");

    try {
      const membersSnapShot = await getDocs(membersRef);
      const membersData = [];

      membersSnapShot.forEach((doc) => {
        membersData.push(doc.data());
      });

      setMembersList(membersData);
      setRenderList(membersData);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const searchfn = () => {
    const filteredList = membersList.filter((member) => {
      const lowerCaseName = member.memberName.toLowerCase();
      return lowerCaseName.includes(searchTxt.current.value);
    });
    setRenderList(filteredList);
  };

  const sendBack = () => {
    alert("Access Restricted");
    window.location.href = "/login";
  };

  useEffect(() => {
    const isLogin = localStorage.userId === "000";
    console.log(isLogin);
    isLogin ? fetchMembers() : sendBack();
  }, []);

  return (
    <div id="admin">
      <div id="admin-cont">
        <div>Hello, Admin!</div>
        <div id="btns">
          <button onClick={() => (window.location.href = "/admin/add-member")}>
            Add a Member
          </button>
          <button
            onClick={() => (window.location.href = "/admin/remove-member")}
          >
            Remove a Member
          </button>
          <button onClick={() => (window.location.href = "/admin/edit-member")}>
            Edit a Member
          </button>
        </div>
        <form id="searchform">
          <input ref={searchTxt} placeholder="search by name" type="text" />
          <button
            onClick={(e) => {
              e.preventDefault();
              searchfn();
            }}
          >
            Search
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>NUMBER</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            {membersList &&
              renderList?.map((member, index) => (
                <tr key={index}>
                  <td>{member.memberId}</td>
                  <td>{member.memberName}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.memberAddress}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
