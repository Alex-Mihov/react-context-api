import GlobalContext from "./contexts/GlobalContext"
import axios from "axios"
import { useEffect, useState } from "react"

import PostsPage from "./pages/PostsPage";

function App() {


  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    axios.get("http://localhost:3000/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err))
  }

  useEffect(fetchPosts, [])

  return (
    <>
      <GlobalContext.Provider value={{ posts }}>

        <PostsPage />

      </GlobalContext.Provider>

    </>
  )
}

export default App
