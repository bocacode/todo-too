import React from 'react'
import { List } from 'antd'

function toggleItemDone(item, todoListItems, setTodoListItems) {
  let updatedTodoList = JSON.parse(JSON.stringify(todoListItems))
  const itemIndex = updatedTodoList.findIndex(todoItem => todoItem.item === item.item)
  updatedTodoList[itemIndex].done = !item.done
  setTodoListItems(updatedTodoList)
  localStorage.setItem('todoList', JSON.stringify(updatedTodoList))
}

function ListItem({ item, todoListItems, setTodoListItems }) {
  const thisClassName = item.done ? 'done' : ''
  return (
    <List.Item
      key={item.item}
      onClick={()=> toggleItemDone(item, todoListItems, setTodoListItems)}
      className={thisClassName}>
      {item.item}</List.Item>
    )
}

function TodoList({ todoListItems, setTodoListItems }) {
  return (
    <List
      size="large"
      bordered
      dataSource={todoListItems}
      renderItem={item =>
          <ListItem todoListItems={todoListItems}
            setTodoListItems={setTodoListItems} item={item} />}
    />
  )
}

export default TodoList