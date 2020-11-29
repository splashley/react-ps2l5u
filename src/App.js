import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function App() {
  const [value, setValue] = useState("poopoo");
  const [result, setResult] = useState("");
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      setResult(value);
    }, 500);
  }, [value]);
  return (
    <div>
      <input
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      />
      <div>input value: {value}</div>
      <div>result = {result}</div>
    </div>
  );
}
