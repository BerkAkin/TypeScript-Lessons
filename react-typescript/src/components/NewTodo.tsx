import React from "react";
import { useRef } from "react";

function NewTodo() {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };
  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <label htmlFor="TodoText">Todo Text</label>
        <input id="TodoText" type="text" ref={textInputRef}></input>
        <button type="submit">Ekle</button>
      </form>
    </>
  );
}

export default NewTodo;
