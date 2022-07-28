import React from 'react'

type PropsType = {
    todoTitle: string
    setTodoTitle: React.Dispatch<React.SetStateAction<string>>
    addTodo: (e: any) => void
}

const TodoInput: React.FC<PropsType> = ({todoTitle, setTodoTitle, addTodo}) => {
    return (
        <input className='App-input' 
        type='text' placeholder='Что нужно сделать?' 
        value={todoTitle} 
        onChange={(e) => setTodoTitle(e.target.value)}
        onKeyPress={(e) => addTodo(e)}
      />
    )
}

export default TodoInput