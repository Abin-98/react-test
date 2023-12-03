import React, { useState } from "react";
import "./Input.css";
const Input = (props) => {
    const [enteredId, setEnteredId] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredProduct, setEnteredProduct] = useState("");

    const handleIdChange = (e) => {
      setEnteredId(e.target.value);
    };
    const handlePriceChange = (e) => {
      setEnteredPrice(e.target.value);
    };
    const handleProductChange = (e) => {
      setEnteredProduct(e.target.value);
    };

  const liftData = (e) => {
    e.preventDefault();
    const data={"id":enteredId, "price":enteredPrice, "product":enteredProduct}
    localStorage.setItem(enteredId,JSON.stringify({"id":enteredId,"price":enteredPrice, "product":enteredProduct}));
    props.userInput(data);
    setEnteredId("");
    setEnteredPrice("");
    setEnteredProduct("");
  };
  return (
    <form onSubmit={liftData} className="form">
      <label>Product ID:</label>
      <input
        type="number"
        min={0}
        value={enteredId}
        onChange={handleIdChange}
      />
      <label>Selling Price:</label>
      <input
        type="number"
        min={0}
        value={enteredPrice}
        onChange={handlePriceChange}
      />
      <label>Product Name:</label>
      <input
        type="text"
        value={enteredProduct}
        onChange={handleProductChange}
      />
      <button>Add Product</button>
    </form>
  );
};

export default Input;
