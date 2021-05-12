import React from "react";
import TodoList from "./TODO/TodoList";

function App() {
    const todos= [
        {id:1, completed: false, title:'Mercedes Benz'},
        {id:2, completed: false, title:'BMW'},
        {id:3, completed: false, title:'Audi'}
    ]
    return (
        <div className='wrapper'>
            <h1>REACT </h1>
            <TodoList todos={todos}/>
        </div>
    )
}

export default App
