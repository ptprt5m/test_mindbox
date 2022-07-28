import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export type TodoItem = {
    id: number
    name: string
    performed: boolean
}

type PropsType = {
    todos: Array<TodoItem>
}

const TodoList: React.FC<PropsType> = ({todos}) => {
    
    return (
        <div className='App-todos'>
        {todos.map(todo => {
          return <TodoItem name={todo.name} performed={todo.performed} key={todo.id} />
        })}
      </div>
    )
}

export default TodoList