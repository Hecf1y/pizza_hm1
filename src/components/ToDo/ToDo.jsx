import classes from "./ToDo.module.css";
import { Container } from "../Container/Container";
import { ToDoItem } from "../ToDoItem/ToDoItem";
//Хук управления состоянием ⤵️//
import { useState } from "react";
import { Divider } from "antd";

export const ToDo = () => {
  //useState для input ⤵️//
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([]);

  //Функция для ввода текста ⤵️//
  const handleChangeText = (event) => {
    // event.preventDefault()
    setText(event.target.value);
  };

  //Функция для добавляение текста ⤵️//
  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      text: text,
      completed: false,
      id: new Date().getTime().toString(),
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  //Функция удаления задач по одной ⤵️//
  const handleRemoveTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  //Функция удаления ВСЕХ задач ⤵️//
  // const handleClearTodo = () =>{
  //   setTodos([])
  // }

  return (
    <div className={classes.todo} id="todo">
      <Container className={classes.innerTodo}>
        <h1 className={classes.title}>ToDo</h1>

        <form className={classes.form} onSubmit={(e) => handleAddTodo(e)}>
          <input
            onChange={(e) => handleChangeText(e)}
            value={text}
            type="text"
            className={classes.input}
            placeholder="Что нужно сделать?"
          />
          <button
            type="submit"
            className={classes.addBtn}
            // onClick={handleAddTodo}
          >
            Добавить
          </button>
        </form>

        <ul className={classes.list}>
          {todos.length <= 0 ? 
            <p className={classes.empty}>Задач нет</p>
           : 
            todos.map((todo) => (
              <ToDoItem
                key={todo.id}
                todo={todo}
                handleRemove={handleRemoveTodo}
              />
            ))
          }
        </ul>

        <button className={classes.addBtn} onClick={() => setTodos([])}>
          Удалить всё
        </button>
      </Container>
    </div>
  );
};
