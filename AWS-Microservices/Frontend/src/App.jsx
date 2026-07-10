import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/api/data')
    .then(res => setData(res.data))
  },[])

  return (
    <>
    <h1>Data from backend</h1>
    <ul>
      {data.map((item)=>{
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>    
    </>
  )
}

export default App
