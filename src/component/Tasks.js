import Task from "./Task"
const Tasks = ({ tasks}) => {
    return (
        <>
            {tasks.map ((task) => (
                <Task key={task.idItem} task={task}  />
            ))}
        </>
    )
}

export default Tasks
