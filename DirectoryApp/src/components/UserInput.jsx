import { useState } from "react";
const UserInput = ({ addUserData }) => {
  const [formData, setFormData] = useState({
    userName: "",
    userAdhar: "",
    userDate: "",
    userMobileNumber: "",
    userAge: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUserData = () => {
    const newErrors = {};
    if (formData.userAdhar.length !== 12) {
      alert((newErrors.userAdhar = "Aadhar number must be exactly 12 digits."));
    }
    if (formData.userMobileNumber.length !== 10) {
      alert(
        (newErrors.userMobileNumber =
          "Mobile number must be exactly 10 digits.")
      );
    }

    if (Object.keys(newErrors).length === 0) {
      addUserData(formData);
      // Clear the form fields
      setFormData({
        userName: "",
        userAdhar: "",
        userDate: "",
        userMobileNumber: "",
        userAge: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="bg-blue-500 h-16 flex flex-col items-center justify-around mt-3">
        <div>Fill below form for New Entry</div>
        <div className="flex items-center justify-around h-40 bg-blue-500 p-4 w-screen">
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={formData.userName}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="userDate"
            value={formData.userDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="userAdhar"
            placeholder="Aadhar Number"
            value={formData.userAdhar}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="userMobileNumber"
            placeholder="Mobile Number"
            value={formData.userMobileNumber}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            type="number"
            name="userAge"
            placeholder="Age"
            value={formData.userAge}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <button
            className="bg-blue-800 h-full w-20 text-white rounded"
            onClick={handleUserData}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default UserInput;
