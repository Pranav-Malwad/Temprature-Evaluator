import { useRef, useState } from "react";
import "./App.css";
import Temprature from "./Components/Temprature";

function App() {
  const [temp, setTemp] = useState(32);
  const [value, setvalue] = useState(0);

  let handleOnClick = (e) => {
    setTemp((value * 9) / 5 + 32);
  };
  let handleOnChange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <>
      <h1 className="text-4xl font-bold">Temprature Converter</h1>
      <Temprature
        temp={temp}
        handleOnClick={handleOnClick}
        handleOnChange={handleOnChange}
      ></Temprature>
    </>
  );
}

export default App;
