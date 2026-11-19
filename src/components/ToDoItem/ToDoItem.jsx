import classes from "./ToDoItem.module.css";

export const ToDoItem = ({ todo, handleRemove }) => {
  console.log(todo.text);

  return (
    <li className={classes.item}>
      <label className={classes.itemLabel}>
        <span className={classes.itemText}>{todo.text}</span>
      </label>
      <button
        type="button"
        className={classes.deleteBtn}
        aria-label="Удалить задачу"
        onClick={() => handleRemove(todo.id)}
      >
        🗑️
      </button>
    </li>
  );
};
