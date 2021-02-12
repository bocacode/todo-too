import React from 'react'
import { List } from 'antd'

function TodoList({ todoListItems }) {
  return (
    <List
      size="large"
      bordered
      dataSource={todoListItems}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  )
}

export default TodoList