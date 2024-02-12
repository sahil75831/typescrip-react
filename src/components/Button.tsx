import React from "react";
import { useConter } from "../provider/Counter";
interface Book {
  name: string;
  price: number;
}
interface buttonProps {
  text: string;
  onClick?: () => void;
  value: Book;
}
const Button: React.FC<buttonProps> = (props) => {
  const context = useConter();
  const {
    onClick = () => {
      console.log("first");
    },
    text,
    value,
  } = props;

  return (
    <div>
      <h1 onClick={(e) => context?.setCount(context.value + 10)}>
        {context?.value}
      </h1>
      <button onClick={onClick}>
        Name : {value.name} | Price : Rs. {value.price} | {text}
      </button>
    </div>
  );
};
export default Button;
