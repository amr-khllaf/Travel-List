import React, { useState } from "react";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";
import initialItems from "../public/data.js";

export default function App() {
  // Lifting State Up Concept in React
  //! State to manage the list of travel items
  const [items, setItems] = useState(initialItems);
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

  return (
    <>
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </>
  );
}
