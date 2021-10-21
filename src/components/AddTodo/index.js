import React, {useState} from 'react'

const AddTodo = (todos, setTodos) => {
    const [newTodo, setNewTodo] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log({todos})
        console.log({newTodo})
        setTodos([...newTodo, ...todos])
    }
    return (
        <div>
            {console.log({todos})}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                <input type='submit' value='submit'/>
            </form>
            {newTodo}
        </div>
    )
}

export default AddTodo