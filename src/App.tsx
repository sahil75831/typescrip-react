import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { CounterProvider } from "./provider/Counter";
function App() {
  interface Book {
    name: string;
    price: number;
  }
  const [val, setValu] = useState<Book>({
    name: "one",
    price: 0,
  });
  const [inputName, setInputName] = useState<string | undefined>();
  const book: string[] = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
  ];
  console.log("book[val.price % 10] : ", book[val.price / 10]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  return (
    <div className="App">
      <CounterProvider>
        <Button
          onClick={() =>
            setValu({ name: book[val.price / 10], price: val.price + 10 })
          }
          text="click me !"
          value={val}
        />
      </CounterProvider>
    </div>
  );
}

export default App;
