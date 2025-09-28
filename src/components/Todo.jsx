import { useState } from 'react';
import './todo.css';
import Heading from './Heading';

function Todo(){

    const[task , setTask] = useState("");
    
    const[ListOfTasks , setListOfTasks] = useState([]);

    const [editIndex, setEditIndex] = useState(-1);

    let handle = () =>{
            if(task.trim() === ""){
            return;
            }
            if(editIndex >= 0){
            const updatedTasks = [...ListOfTasks];
            updatedTasks[editIndex] = task;
            setListOfTasks(updatedTasks);
            setEditIndex(-1);
            } 
            else{
            setListOfTasks([...ListOfTasks, task]);
            setTask("")
            }

        }  
    
    let handlingDelete = (index) => {
    setListOfTasks(ListOfTasks.filter((_, i) => i !== index));
     };

    let handleEdit = (index) => {
        setTask(ListOfTasks[index]); // Show task in input field
        setEditIndex(index);   // Set edit mode
    };
        // let a = [1,3,4,5]

        // a.map((a,i)=>{
        //     console.log(i +" "+a)
        // });

        
    return(<>
        <form id="todo" onSubmit={(e)=>{e.preventDefault()}}>
                <div id="heading"><Heading></Heading></div>
                <div id="input">
                <input type="text" className="form-control" id="ip" placeholder="Enter the Task" value={task} 
                onChange={(e)=>{
                    setTask(e.target.value)
                }}/>


                    <button 
                        id="add" 
                        type="button" 
                        class="btn btn-success"
                        onClick={handle}>
                        {editIndex >= 0 ? "Update" : "Add"}
                    </button>
                </div>

                <div id="tasks">
                    {/* <p id="p">{t}</p>

                    <button id="del" type="button" className="btn btn-danger">Delete</button>
                    <button id="upd" type="button" className="btn btn-primary">Update</button> */}

                    <ul id="ul" className="list-group ">
                        {ListOfTasks.map((e,i)=>(
                            <li id="list" key={i}>
                                <span>{e}</span>
                                <div id="controls">
                                    <button id="del" type="button" className="btn btn-danger" onClick={() => handlingDelete(i)}>Delete</button>
                                    <button id="upd" type="button" className="btn btn-primary" onClick={() => handleEdit(i)}>Update</button>
                                    
                                </div>
                                </li>

                            
                        ))}    
                    </ul>
                </div>

        </form>
    </>)
}

export default Todo;