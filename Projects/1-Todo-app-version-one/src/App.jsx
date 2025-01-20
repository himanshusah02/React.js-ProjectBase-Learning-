import { useState } from "react";
import Addtodo from "./components/Addtodo";
import AppName from "./components/AppName";
import TodoItem from "./components/todoitem1";
import TTodoItems from "./components/todoItems";
import WelcomeMessage from "./components/wellcomMessage";
import { TodoItemContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoitems] = useState([]);

  const addNewItem = (itemName, itemDuedate) => {
    setTodoitems((currvalue) => {
      const newTodoItems = [
        ...currvalue,
        { name: itemName, dueDate: itemDuedate },
      ];
      return newTodoItems;
    });

    // setTodoitems((currvalue) => {
    //   [...currvalue, { name: itemName, dueDate: itemDuedate }];
    // });
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(newTodoItems);
    // console.log(`Item Deleted : ${todoItemName}`);
  };

  const defaultTodoItems = [{ name: "buy ghe", dueDate: "today" }];

  return (
    <TodoItemContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem
      }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <Addtodo></Addtodo>

        <WelcomeMessage></WelcomeMessage>

        <TTodoItems onNewitem={addNewItem}></TTodoItems>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
