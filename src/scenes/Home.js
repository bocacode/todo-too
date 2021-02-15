import React, { useState } from 'react'
import Head from '../components/home/Head'
import TodoList from '../components/home/TodoList'

function Home() {
  const initialItems = JSON.parse(localStorage.getItem('todoList'))
      || [{ item: 'Walk Milk', done: false },
          { item: 'Cook Dog', done: true},
          { item: 'Drink Chicken', done: false }]
  const [todoListItems, setTodoListItems] = useState(initialItems)
  return (
    <>
      <Head todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
      <TodoList todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
    </>
  )
}

export default Home