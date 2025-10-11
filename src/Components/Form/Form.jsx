import React, { useState } from "react";

export default function Form({ onAddItem }) {
  //! State to manage form inputs
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  //! State to manage the list of travel items

  //! Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return; //& Prevent adding empty items

    //! Create a new travel item object
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    //! Add the new item to the list
    onAddItem(newItem);

    //! Reset form fields
    setDescription("");
    setQuantity(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for now 👉👈</h3>
        <select
          name="travel-needs"
          id="travel-needs"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {/* //! Generate quantity options, Using Array.from */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your travel item need"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button> Add</button>
      </form>
    </>
  );
}
