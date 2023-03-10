import { TextField } from "@mui/material";
import '../../styles/styles.scss';
import Button from '@mui/material/Button';
import { db } from '../../../config/firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const TaskInput = () => {

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskAssignedEmp, setNewTaskAssignedEmp] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');



  const tasksCollectionRef = collection(db, 'tasks');

  const onSubmitTask = async () => {
    try {
      await addDoc(tasksCollectionRef, {
        title: newTaskTitle,
        description: newTaskDescription,
        assignedEmp: newTaskAssignedEmp,
        dueDate: newTaskDueDate,
      })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <p className="full-name-p">Title</p>
      <TextField
        className="full-name"
        variant="outlined"
        sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <p className="emp-input-p">Description</p>
      <TextField
        className="email"
        variant="outlined"
        sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
        onChange={(e) => setNewTaskDescription(e.target.value)}

      />
      <p className="emp-input-p">Assigned employee</p>
      <TextField
        className="birth-date"
        variant="outlined"
        sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
        onChange={(e) => setNewTaskAssignedEmp(e.target.value)}

      />
      <p className="emp-input-p">Due date</p>
      <TextField
        className="phone-number"
        variant="outlined"
        type="number"
        sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
        onChange={(e) => setNewTaskDueDate(e.target.value)}

      />

<Button
        variant="contained"
        className="sbmt-emp-btn"
      >
        <Link to='/' 
        className="create-employee-link"
        onClick={onSubmitTask}
        >
          Create</Link>
      </Button>
    </>
  )
}