import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export type TodoItem = {
    id: number
    name: string
    performed: boolean
}

type PropsType = {
    todos: Array<TodoItem>
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoList: React.FC<PropsType> = ({todos, toggleTodo, removeTodo}) => {
    
    return (
        <div className='App-todos'>
        {todos.map(todo => {
          return <TodoItem id={todo.id} name={todo.name} performed={todo.performed}
                           key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        })}
      </div>
    )
}

export default TodoList