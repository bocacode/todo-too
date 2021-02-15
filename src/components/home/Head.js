import React, { useState, useContext } from 'react'
import { Input, Space } from 'antd'
import { UserContext } from '../../App'
const { Search } = Input

function Head({ todoListItems, setTodoListItems }) {
  const { user } = useContext(UserContext)
  const [newTodo, setNewTodo] = useState(null)
  function addTodo() {    
    setTodoListItems([...todoListItems, newTodo])
    localStorage.setItem('todoList', JSON.stringify([...todoListItems, newTodo]))
    setNewTodo(null)
  }
  return (
    <header style={{ textAlign: 'center' }}>
      <h1>Welcome {user ? 'User!' : 'Guest.'}</h1>
      <h2>Todo:</h2>
      <Space direction="vertical">
        <Search
          placeholder="New Todo Item"
          allowClear
          enterButton="ADD"
          size="large"
          value={newTodo ? newTodo.item : null}
          onChange={(e) => setNewTodo({ item: e.target.value, done: false })}
          onSearch={addTodo}
        />
      </Space>
    </header>
  )
}

export default Head