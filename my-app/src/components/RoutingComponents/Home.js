import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  // const postIntialState = {
  //   title: ''
  // }
  const [post, setPost] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        console.log("RESPONSE ==>", response);
        setPosts(response.data)
        // setPost(response.data)
      })
      .catch(error => {
        console.log("ERROR ==>", error);
      })

    // axios.post(`URL`, options).then().catch()
    // axios.put(`URL`, options).then().catch()
    // axios.patch(`URL`, options).then().catch()
    // axios.delete(`URL`, options).then().catch()
  }, [id])

  return (
    <div>
      <ul>
        {
          posts.map((post, index) => <li>{post.title}</li>)
        }
      </ul>
      {/* <input type="text" value={id} onChange={e => setId(e.target.value)} /><br></br>
      {post && post.title} */}
    </div>
  )
}

export default Home