import React, { useState, useContext } from 'react'
import { Input, Space, Avatar } from 'antd'
import { UserContext } from '../../App'
const { Search } = Input

function Head({ setTodoListItems }) {
  const { user } = useContext(UserContext)
  const [newTodo, setNewTodo] = useState(null)
  function addTodo() {
    if(newTodo && newTodo.item && newTodo.item.trim()){
      fetch(`https://todo-bc-api.web.app/tasks/${user.uid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
      .then(res => res.json())
      .then(data => setTodoListItems(data))
      .catch(e => console.log(e))
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
      {user && <Space direction="vertical">
        <Search
          placeholder="New Todo Item"
          allowClear
          enterButton="ADD"
          size="large"
          value={newTodo ? newTodo.item : null}
          onChange={(e) => setNewTodo({ item: e.target.value, userId: user.uid })}
          onSearch={addTodo}
        />
      </Space>}
    </header>
  )
}

export default Head