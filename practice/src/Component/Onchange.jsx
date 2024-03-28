import { useState } from "react";

function Onchange() {
  const [name, setName] = useState("Sonu");
  const [number, setNumber] = useState("0");
  const [comment, setComment] = useState("buy");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("delivery");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handelCommentChange = (event) => {
    setComment(event.target.value);
  };

  function handelPaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <>
    <h2>Onchange</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Change Name:-{name}</p>

      <input type="text" value={number} onChange={handleNumberChange} />
      <p>Change Name:-{number}</p>

      <textarea
        maxLength={100}
        value={comment}
        onChange={handelCommentChange}
      />
      <p>Comment:{comment}</p>

      <select value={payment} onChange={handelPaymentChange}>
        <option value="">Select on Option</option>
        <option value="visa">Visa</option>
        <option value="MasterCard">Master Card</option>
        <option value="google">GooglePay</option>
      </select>
      <p>Payment:{payment}</p>

      <label>
        <input
          type="radio"
          value="pick up"
          checked={shipping === "pick up"}
          onChange={handleShippingChange}
        />
        pick Up
      </label>
        <br/>
      <label>
        <input
          type="radio"
          value="delivery"
          checked={shipping === "delivery"}
          onChange={handleShippingChange}
        />
        delivery
      </label>

      <p>Shipping: {shipping}</p>

    </>
  );
}

export default Onchange;
