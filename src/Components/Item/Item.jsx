import React from "react";

export default function Item({ item }) {
  const { description, quantity, packed } = item;

  return (
    <>
      <div>
        <li>
          <span style={{ textDecoration: packed ? "line-through" : "none" }}>
            {quantity}&nbsp;
            {description}
          </span>
          <button>❌</button>
        </li>
      </div>
    </>
  );
}
