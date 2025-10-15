import { useEffect, useState } from 'react'
import './App.css'
import Coffee from './components/Coffee'
import { getHotCoffee, getColdCoffee } from './services/coffeeServices';
import { useAsyncState } from './hooks/useAsyncState';
import * as PostService from "./services/postServices"
import Post from './components/Post';
function App() {

  const [temperature, setTemperature] = useState("hot")
  const [route,setRoute]=useState("coffee")
  const fetcher=temperature==="hot"? getHotCoffee :getColdCoffee
  const list =useAsyncState([],fetcher,{
    onError:(err) =>{console.log(err)},
    onSuccess:(value)=>{console.log(value)}
  })

  const postList =useAsyncState([],PostService.index,{
    onError:(err) =>{console.log(err)},
    onSuccess:(value)=>{console.log(value)}
  })

  const handleDelete= async (id)=>{
    try {
       await PostService.remove(id);
      postList.setList((prev)=>prev.filter((item)=>item.id!==id)
      )
    } catch (error) {
      console.log(error)
      
    }
  


  }

  return (
    <>
    {list.status==="loading"&&"Loading..."}
      {route==="coffee"&&<button onClick={() => setTemperature(temperature === "iced" ? "hot" : "iced")}>{temperature === "hot" ? "Soğuk kahveler ☕❄️" : "Sıcak kahveler 🔥"}</button>}
      {route==="coffee"&&<button onClick={()=>setRoute("post")}>Postlara git</button>}
      {route==="post"&&<button onClick={()=>setRoute("coffee")}>Coffee git</button>}
      { (list.status==="idle"&& route==="coffee")&& list.list.map((item) => {
        return (
          <Coffee
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}

          />
        )
      })}
      { (list.status==="idle"&& route==="post")&& postList.list.map((item) => {
        return (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            onDelete={()=>handleDelete(item.id)}

          />
        )
      })}

    </>
  )
}

export default App
