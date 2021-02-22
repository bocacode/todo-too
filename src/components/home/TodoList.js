import React from 'react'
import { List, Button } from 'antd'

function itemAction(action, item, setLoading, setTodoListItems) {
  setLoading(true)
  const API_URL = `https://todo-bc-api.web.app/tasks/${item.userId}/${item.id}`
  const params = (action === 'done')
    ? {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done: !item.done })
    }
    : {
      method: 'DELETE'
    }
  fetch(API_URL, params)
  .then(res => res.json())
  .then(data => {
    setTodoListItems(data)
    setLoading(false)
  })
  .catch(err => {
    console.log('error updating item: ', err)
    setLoading(false)
  })
}

function ListItem({ item, setLoading, setTodoListItems }) {
  const thisClassName = item.done ? 'done' : ''
  return (
    <List.Item
      actions={[
        <Button primary key="list-done" onClick={() => itemAction('done', item, setLoading, setTodoListItems)}>done</Button>,
        <Button danger key="list-delete" onClick={() => itemAction('delete', item, setLoading, setTodoListItems)}>delete</Button>,
      ]}
      key={item.item}
      className={thisClassName}>
      {item.item} </List.Item>
    )
}

function TodoList({ todoListItems, setTodoListItems, loading, setLoading }) {
  return (
    <List
      size="large"
      loading={loading}
      bordered
      dataSource={todoListItems}
      renderItem={item =>
          <ListItem
            setTodoListItems={setTodoListItems}
            setLoading={setLoading}
            item={item} />}
    />
  )
}

export default TodoList