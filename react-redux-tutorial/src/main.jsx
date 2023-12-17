import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './bharat-clock/App.jsx'
import Todo from './todo-app/Todo.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <Todo />
  </React.StrictMode>,
)
