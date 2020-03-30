import React, {useState, useRef, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTools() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false,
        });
    }
    return array;
}

const App = () => {
    /*  const [todos, setTodos] = useState([{
              id: 1,
              text: '리액트의 기초 알아보기',
              checked: true,
          },
              {
                  id: 2,
                  text: '컴포넌트 스타일링해 보기',
                  checked: false,
              },
              {
                  id: 3,
                  text: '일정 관리 앱 만들어보기',
                  checked: false,
              }]
      );*/

    const [todos, setTodos] = useState(createBulkTools);
    // const nextId = useRef(4);
    const nextId = useRef(2501);

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text,
                checked: false
            };
            setTodos(todos => todos.concat(todo));
            nextId.current += 1;
        }, [todos]
    );

    const onRemove = useCallback(
        id => {
            setTodos(todos => todos.filter(todo => todo.id !== id));
        }, [todos]
    );

    const onToggle = useCallback(
        id => {
            setTodos(todos =>
                todos.map(todo =>
                    todo.id === id ? {...todo, checked: !todo.checked} : todo,
                )
            )
        }, [todos]
    );
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    );
};

export default App;