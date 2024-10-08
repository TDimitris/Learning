import List from '@mui/material/List';
import ToDoItem from './ToDoItem';
import TodoForm from './TodoForm';
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';


import { useState, useEffect } from 'react';

// const initialTodos = [
//     {id: 1, text: "walk the dog", completed: false},
//     {id: 2, text: "walk the cat", completed: false},
//     {id: 3, text: "walk the fish", completed: true},
//     {id: 4, text: "walk the chickens", completed: false}

// ];

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if(!data) return [];
        return data;
}

export default function ToDoList() {

    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    };

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if(todo.id === id){
                    return {...todo, completed: !todo.completed}
                }
                else{
                    return todo;
                }
                    
            })
        })
    };

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {
                id: crypto.randomUUID(),
                text: text,
                completed: false
            }];
        })
    };

    return (

        <Box sx={{
            display: 'flex',
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            m: 3
        }}>
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                Todos
        </Typography>
        <List sx={{width: '100%', maxWidth:360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <ToDoItem todo={todo}
                    key={todo.id}
                    removeToDo={() => removeTodo(todo.id)}
                    toggleToDo={() => toggleTodo(todo.id)}/>
                ))}
            <TodoForm addTodo={addTodo}/>
        </List>
        </Box>
    )
}