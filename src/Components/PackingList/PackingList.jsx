import React from "react";
// import items from "../../../public/data";
import Item from "../Item/Item";
export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  console.log(items);

  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => {
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
      </div>
    </>
  );
}
