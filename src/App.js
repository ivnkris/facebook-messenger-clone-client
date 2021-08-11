import React from "react"
import './App.css';
import Login from "./components/Login"
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [id, setId] = useLocalStorage("id")

  return (
    <>
      {id}
      <Login onIdSubmit={setId} />
    </>
  );
}

export default App;
