import { useContext } from "react";
import styles from "./todoItems.module.css";
import TodoItem1 from "./todoitem1";
import { TodoItemContext } from "../store/todo-items-store";

const TTodoItems = ({onDeleteClick }) => {
 
  
  const {todoItems} =  useContext(TodoItemContext);
  
  

  console.log({todoItems});
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem1
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem1>
      ))}
    </div>
  );
};
export default TTodoItems;
