import './TodoList.css'

interface TodoListProps {
  list: {id: string, text: string}[]
  deleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ list, deleteTodo }) => {
  return (
    <ul>
      {list.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
