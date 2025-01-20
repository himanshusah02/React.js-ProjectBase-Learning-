import { RiDeleteBin6Line } from "react-icons/ri";
function TodoItem1({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row hs-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger hs-button"
            onClick={() => onDeleteClick(todoName)}
          >
           <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
