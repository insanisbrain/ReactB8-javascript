import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Header = () => {

  const todos = useSelector(state => state.todos.data);
  const posts = useSelector(state => state.posts.data);
  const users = useSelector(state => state.users.data);

  const [allTodos, setAllTodos] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    if (todos.length) {
      setAllTodos(todos);
    }
  }, [todos])

  useEffect(() => {
    if (posts.length) {
      setAllPosts(posts);
    }
  }, [posts])

  useEffect(() => {
    if (users.length) {
      setAllUsers(users);
    }
  }, [users])

  return (
    <div>
      {
        allTodos.length && <div>TODO: {allTodos[0].title}</div>
      }
      {
        allPosts.length && <div>POST: {allPosts[0].title}</div>
      }
      {
        allUsers.length && <div>USER: {allUsers[0].name}</div>
      }

      {/* {
        allTodos.length && allTodos.map(todos => (
          <div>{todos.title}</div>
        ))
      } */}
    </div>
  )
}

export default Header