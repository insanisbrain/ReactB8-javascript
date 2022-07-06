import logo from './logo.svg';
import './App.css';
import GlassProduct from './components/GlassProduct';
import EyeProduct from './components/EyeProduct';
import Header from './components/Header';
import Users from './components/Users';
import Posts from './components/Posts';
import ClothProduct from './components/ClothProduct';
import Todos from './components/Todos';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTodos } from './redux/todos/todosSlice';
import { fetchPosts } from './redux/posts/postsSlice';
import { fetchUsers } from './redux/users/usersSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchPosts());
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <Header />
      {/* <GlassProduct /> */}
      {/* <EyeProduct /> */}
      {/* <Users />
      <Posts /> */}
      {/* <ClothProduct /> */}
    </div>
  );
}

export default App;
