import React from "react";

export default function Item({ item, onDeleteItem }) {
  const { description, quantity, packed } = item;

  return (
    <>
      <div>
        <li>
          <span style={{ textDecoration: packed ? "line-through" : "none" }}>
            {quantity}&nbsp;
            {description}
          </span>
          <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
      </div>
    </>
  );
}
