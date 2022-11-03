import React,{ useState} from 'react'
import Tasks from '../component/Tasks'

const Home = () => {
  const [tasks,setTasks ] = useState ([
    {
    idItem:1,
    itemName:'sneakers',
    version:'2021',
    description: 'child wear',
   
    
},
{
    idItem:2,
    itemName:'sneakers',
    version:'2019',
    description: 'women wear',

    
},
{
    idItem:3,
    itemName:'sneakers',
    version:'2020',
    description: 'men wear',

    
},
])
const addTask = (task) =>{
  const idItem = Math.floor(Math.random() * 10000) +1 
  const newTask= {
    idItem,...task}
    setTasks([...tasks, newTask])
}

  return (
    <div>
      <h1>Home </h1>
      <Tasks tasks={tasks} />
      
    </div>
  )
}

export default Home
