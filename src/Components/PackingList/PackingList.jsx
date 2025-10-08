import React from "react";
import items from "../../../public/data";
import Item from "../Item/Item";
export default function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </ul>
      </div>
    </>
  );
}
