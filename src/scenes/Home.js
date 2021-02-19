import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import Head from '../components/home/Head'
import TodoList from '../components/home/TodoList'

function Home() {
  const [todoListItems, setTodoListItems] = useState([])
  const { user } = useContext(UserContext)
  useEffect(() => {
    if(user){
      fetch(`https://todo-bc-api.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(data => setTodoListItems(data))
        .catch(e => console.log(e))
    } else {
      setTodoListItems([])
    }
  }, [user])
  return (
    <>
      <Head todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
      <TodoList todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
    </>
  )
}

export default Home