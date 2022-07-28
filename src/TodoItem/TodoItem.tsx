import React, {useState} from 'react'


type PropsType = {
    name: string
    performed: boolean
}

const TodoItem: React.FC<PropsType> = ({name, performed}) => {
    const [check, setCheck] = useState(performed)
    return (
        <div className='App-todos-block'>
            <input className='App-todo-checkbox' type='checkbox' checked={check} onChange={() => setCheck(!check)} />
            <p className={check ? 'App-todo-name check' : 'App-todo-name'}>{name}</p>
        </div>
    )
}

export default TodoItem