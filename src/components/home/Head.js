import React, { useState, useContext } from 'react'
import { Input, Space, Avatar } from 'antd'
import { UserContext } from '../../App'
const { Search } = Input

function Head({ todoListItems, setTodoListItems }) {
  const { user } = useContext(UserContext)
  const [newTodo, setNewTodo] = useState(null)
  function addTodo() {
    if(newTodo && newTodo.item && newTodo.item.trim()){
      setTodoListItems([...todoListItems, newTodo])
      localStorage.setItem('todoList', JSON.stringify([...todoListItems, newTodo]))
    }
    setNewTodo(null)
  }
  const greeting = (!user)
    ? 'Guest.' : user.displayName || 'User!'
  const userImage = (!user || !user.photoURL)
    ? null : <Avatar size={48} src={user.photoURL} />
  return (
    <header style={{ textAlign: 'center' }}>
      <h1>Welcome {greeting} {userImage}</h1>
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