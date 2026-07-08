import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/users')
    .then(res => setUser(res.data))
  }, [])

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {user.map((user)=>{
          return <li key={user.id}>{user.name} - {user.age}</li>
        })}
      </ul>
    </>
  )
}

export default App
