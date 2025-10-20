import React, { useState } from "react";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";
// import initialItems from "../public/data.js";

export default function App() {
  // Lifting State Up Concept in React
  //! State to manage the list of travel items
  const [items, setItems] = useState([]);
  //! Function to add a new item to the list
  function handleAddItem(item) {
    setItems((prevItems) => {
      //& Add the new item to the list by using new array to prevent state mutation and Immutability
      return [...prevItems, item];
    });
  }

  // Function to delete an item from the list
  function handleDeleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id); //& Filter out the item with the given id
    });
  }

  // Function to toggle the packed status of an item
  function handleToggleItem(id) {
    setItems((prevItems) => {
      // & Map through the items and toggle the packed status of the item with the given id
      return prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    });
  }

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </>
  );
}
