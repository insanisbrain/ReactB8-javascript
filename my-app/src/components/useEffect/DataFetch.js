import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetch = () => {

  const [posts, setPosts] = useState([]);

  // const postIntialState = {
  //   title: ''
  // }
  const [post, setPost] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log("RESPONSE ==>", response);
        // setPosts(response.data)
        setPost(response.data)
      })
      .catch(error => {
        console.log("ERROR ==>", error);
      })
  }, [id])

  return (
    <div>
      {/* <ul>
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul> */}
      <input type="text" value={id} onChange={e => setId(e.target.value)} /><br></br>
      {post && post.title}
    </div>
  )
}

export default DataFetch