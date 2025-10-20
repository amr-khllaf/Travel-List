import React from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  const { description, quantity, packed, id } = item;

  return (
    <>
      <div>
        <li>
          <input
            type="checkbox"
            value={packed}
            onChange={() => onToggleItem(id)}
          />
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
