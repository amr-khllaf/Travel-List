import React from "react";

export default function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for now 👉👈</h3>
        <select name="travel-needs" id="travel-needs">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Enter your travel item need" />
        <button> Add</button>
      </form>
    </>
  );
}
