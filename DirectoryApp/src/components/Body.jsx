import { useState, useEffect } from "react";
import UserInput from "./UserInput";

export const Body = () => {
  const [showUserInput, setShowUserInput] = useState(false);
  const [userData, setUserData] = useState([]);

  // Load existing user data from local storage on component mount
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleOnclick = () => {
    setShowUserInput(!showUserInput);
  };

  const addUserData = (newUser) => {
    const updatedUserData = [...userData, newUser];
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  const deleteUser = (index) => {
    const updatedUserData = userData.filter((_, i) => i !== index);
    setUserData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  return (
    <>
      <div className="w-screen bg-red-200">
        <ul className="h-10 bg-blue-500 flex justify-around items-center text-[18px] text-white">
          <li>Name</li>
          <li>Date of birth</li>
          <li>Aadhar Number</li>
          <li>Mobile Number</li>
          <li>Age</li>
          <li>Actions</li>
        </ul>
      </div>
      <div>{showUserInput && <UserInput addUserData={addUserData} />}</div>
      <div>
        <UserList userData={userData} deleteUser={deleteUser} />
      </div>
      <div className="flex justify-end px-10 py-10">
        <button
          className="bg-blue-600 w-20 h-10 rounded-sm"
          onClick={handleOnclick}
        >
          Add
        </button>
      </div>
    </>
  );
};

//  UserList Component

function UserList({ userData, deleteUser }) {
  return (
    <div className="mt-5">
      <ul className="space-y-4">
        {userData.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-blue-400 p-4 rounded shadow"
          >
            <div>
              {user.userName} - {new Date(user.userDate).toLocaleDateString()} -{" "}
              {user.userAdhar} - {user.userMobileNumber} - {user.userAge}
            </div>
            <button
              onClick={() => deleteUser(index)}
              className="bg-blue-800 text-white p-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
