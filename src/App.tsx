import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import { Todo } from './todo.model'

const App: React.FC = () => {
  const [ todos, setTodos ] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text}
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <TodoForm addTodo={todoAddHandler}/>
      <TodoList deleteTodo={todoDeleteHandler} list={todos} />
    </div>
  );
}

export default App;
