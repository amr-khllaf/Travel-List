import React, { useState } from "react";

export default function Form() {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return; // Prevent adding empty items

    // Create a new travel item object
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // Reset form fields
    setDesc("");
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
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your travel item need"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button> Add</button>
      </form>
    </>
  );
}
