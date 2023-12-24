
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/main/Posts'
import { useState } from 'react'
import { useEffect} from 'react'
import axios from "axios";

export default function Home() {
  const [ posts, setPosts ] = useState([]);
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" );
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
          <Navbar />
          <Header />
          <Sidebar />
          <Posts posts={posts}/>
    </div>
  )
}
