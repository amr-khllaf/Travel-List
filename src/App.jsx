import React from "react";
import Logo from "./Components/Logo/Logo";
import Form from "./Components/Form/Form";
import PackingList from "./Components/PackingList/PackingList";
import Stats from "./Components/Stats/Stats";

export default function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
}
