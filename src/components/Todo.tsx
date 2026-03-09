import { useState } from "react";

type TodoItem = { date: Date; text: string; completed: boolean };

const TodoApp = () => {
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleAdd = () => {
    if (inputText.trim() === '') return;
    const newRec: TodoItem = {
        date: new Date(),
        text: inputText,
        completed: false,
    };
    setTodo(prev => [...prev, newRec]);
    setInputText('');
  }

  const hanldeDelete = (date: Date) => {
    setTodo(prev => prev.filter(item => item.date !== date));
  }

  // Toggle completion 
  const handleToggle = (date: Date) => { 
    setTodo(prev => prev.map(todo => todo.date === date ? { ...todo, completed: !todo.completed } : todo ) ); 
};

  return (
    <>
        <div>
            <input type="text"
            placeholder="Add Text"
            value={inputText}
            onChange={(e) => {
                setInputText(e.target.value);
            }} />

            <button type="button"
            onClick={handleAdd}>add record</button>
        </div>

        <div>
            {todo.map((record, index) => (
                <li key={index}>
                
                    <button type="button"
                    onClick={() => hanldeDelete(record.date)}>delete</button>
                    <span onClick={() => handleToggle(record.date)}
                    style={{
                        textDecoration: record.completed ? "line-through" : "none",
                        color: record.completed ? "#888" : "#000",
                        cursor: "pointer"
                    }}
            >
              {record.text}
            </span>
                </li>
            ))}
        </div>
    </>
  );
};

export default TodoApp;
