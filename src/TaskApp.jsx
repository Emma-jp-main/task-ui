import { useEffect, useState } from "react";
import './App.css'

function TaskApp() {
    const [tasks, setTasks] = useState([]);

    //fetchしてとってきたデータをsetTasksに入れたい
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            console.log("status=", response.status);
            const data = await response.json();
            console.log("data=", data);
            setTasks(data);
        }
        fetchTasks();
    }, []);

    return (
       <div>
           <h1>Task App</h1>
           <ul>
               {tasks.map((task) => (
                   <li key={task.id}>
                       {/*{task.completed}だと表示されないので注意*/}
                       {/*{boolean}は表示されない*/}
                       {task.title}:{task.completed ? "完了" : "未完了"}
                   </li>
               ))}
           </ul>
       </div>
    );
}

export default TaskApp;