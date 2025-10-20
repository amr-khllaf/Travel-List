import React, { useState } from "react";
// import items from "../../../public/data";
import Item from "../Item/Item";
export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  // console.log(items);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  // Sorting logic
  if (sortBy === "input") sortedItems = items;
  // Sort by description
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  // Sort by packed status
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            );
          })}
        </ul>

        <div className="actions">
          <select
            name="sortBy"
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Sort by the input order</option>
            <option value="description">Sort by the description</option>
            <option value="packed">Sort by the packed status</option>
          </select>
        </div>
      </div>
    </>
  );
}
