import { useRef } from 'react'
import './TodoForm.css'

type TodoFormProps = {
  addTodo: (todoText: string) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    const enteredText = textInputRef.current!.value
    addTodo(enteredText)
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  )
}

export default TodoForm
