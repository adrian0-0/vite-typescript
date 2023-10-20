import React from "react";
import { useState } from "react";
// import "module-alias/register";
// import { User } from "@src";
// import reactLogo from "./assets/react.svg";

// import viteLogo from "../public/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>Contact Form</h1>
        <form
          action="https://formsubmit.co/2007a25874ff79ac6467c7a31d68cea1"
          method="POST"
          encType="multipart/form-data"
          git
          s
        >
          <input type="text" name="Name" placeholder=" Nome Completo"></input>
          <input type="email" name="Email" placeholder="Email" required></input>
          <select name="Continente" id="">
            <option value="Africa"></option>
            <option value="Antartica"></option>
            <option value="Asia"></option>
            <option value="Oceania"></option>
            <option value="Europa"></option>
            <option value="America"></option>
          </select>
          <textarea name="Message" placeholder="Mensagem" required></textarea>
          <label htmlFor="documento">Selecione um documento:</label>
          <input type="file" name="documento" id="documento"></input>
          <input type="file" name="documento" id="documento"></input>
          <button type="submit">Enviar</button>
        </form>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
