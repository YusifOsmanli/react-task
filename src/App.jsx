import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import './assets/components/style.css'
import Cards from './assets/components/Cards'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://www.omdbapi.com/?s=harry&apikey=71ca83a0").then(res=>{
      console.log(res.data.Search)
      setData(res.data.Search)
    })
  },[])
  


  return (
    <>
      <Header/>
      {
        data.map((item)=>{
        return  <Cards key={item.imdbID} item={item}/>
        })
      }
    </>
  )
}

export default App
