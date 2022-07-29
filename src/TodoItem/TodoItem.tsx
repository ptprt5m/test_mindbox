import React from 'react'

type PropsType = {
    id: number
    name: string
    performed: boolean
    toggleTodo: (id: number) => void
    removeTodo: (id: number) => void
}

const TodoItem: React.FC<PropsType> = ({id, name, performed,
                                           toggleTodo, removeTodo}) => {

    return (
        <div className='App-todos-block'>
            <div className='App-name-block'>
                <input className='App-todo-checkbox' type='checkbox'
                       checked={performed} onChange={() => toggleTodo(id)} />
                <p className={performed ? 'App-todo-name check' : 'App-todo-name'}>{name}</p>
            </div>
            <div className='App-todo-delete' onChange={() => {removeTodo(id)}}>❌</div>
        </div>
    )
}

export default TodoItem