import { useState } from "react";

const TodoFormInput = (props) => {
  const [isValidChar, setIsValidChar] = useState(true);
  // const [value, setValue] = useState("");

  // console.log("render");
  let inputValue = "";

  const onChangeHandler = (e) => {
    if (e.target.value.includes("@")) {
      setIsValidChar(false);
    } else {
      inputValue = e.target.value;
      // setValue(e.target.value);
    }
  };

  const onClickAddButton = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: inputValue,
      isCompleted: false,
    };
    // const newToods = [...todos, newTodo];
    console.log("newTodo", newTodo);

    props.onAddTodo(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your task"
        onChange={onChangeHandler}
      />
      {isValidChar === true ? null : "Invalid charcted"}
      <button onClick={onClickAddButton}>Add</button>
    </div>
  );
};

export default TodoFormInput;