import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "../Components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button titleOfButton="Hello" color="red" />
      <Button titleOfButton="I love" color="green" />
      <Button titleOfButton="React" color="yellow" />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + ITMO</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Плюс один
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Минус один
        </button>
        <h2>count is {count}</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p
        onClick={() => {
          setCount((prev) => prev + 100); // count = 100
          setCount((prev) => prev + 100);
          setCount((prev) => prev + 100);
        }}
      >
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
