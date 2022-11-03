 

const Task = ( {task}) => {
  return (
    <div className="task">
        <h3> {task.itemName}</h3>
        <p>{task.version}</p>
        <p>{task.description}</p>

         
      
    </div>
  )
}

export default Task
