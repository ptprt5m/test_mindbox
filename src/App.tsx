import React, {useEffect, useState} from 'react';
import './App.css';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

type todoType = {
    id: number
    name: string
    performed: boolean
}

const App = () => {
    const initialState: Array<todoType> = []
    const [todos, setTodos] = useState(initialState)
    const [todoTitle, setTodoTitle] = useState('')

    useEffect(() => {
        const localStorageTodos: any = localStorage.getItem('todos') || []
        console.log(localStorageTodos)
        setTodos(JSON.parse(localStorageTodos))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (e: any) => {
        if (e.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    name: todoTitle,
                    performed: false
                }
            ])
            setTodoTitle('')
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => {
            return todo.id !== id
        }))
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.performed = !todo.performed
            }
            return todo
        }))
    }

    return (
        <div className='App'>
            <h1 className='App-title'>todos</h1>
            <TodoInput todoTitle={todoTitle} setTodoTitle={setTodoTitle} addTodo={addTodo}/>
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>
    );
}

export default React.memo(App);
