import React, { useState } from 'react'
import { Layout } from 'antd'
import NavBar from '../components/common/NavBar'
import Head from '../components/home/Head'
import TodoList from '../components/home/TodoList'
const { Content, Footer } = Layout

function Home() {
  const [todoListItems, setTodoListItems] = useState(JSON.parse(localStorage.getItem('todoList')))
  return (
    <Layout className="layout">
      <NavBar />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Head todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
          <TodoList todoListItems={todoListItems} setTodoListItems={setTodoListItems} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2021 Created by Boca Code
      </Footer>
    </Layout>
  )
}

export default Home