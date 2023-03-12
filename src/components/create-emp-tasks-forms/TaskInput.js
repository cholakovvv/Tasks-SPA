import { TextField } from "@mui/material";
import '../styles/styles.scss';
import Button from '@mui/material/Button';
import { db } from '../../config/firebase-config';
import { useState, useEffect } from 'react';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Alert from '@mui/material/Alert';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import TextareaAutosize from '@mui/base/TextareaAutosize';

export const TaskInput = () => {

  let bestEmployees = {};

const dueDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;


  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [newTaskAssignedEmp, setNewTaskNewTaskAssignedEmp] = useState('');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');

  const navigate = useNavigate();
  const routeHomeChange = () => {
    let path = `/`;
    navigate(path);
  }

  const [message, setMessage] = useState({ error: false, msg: '' });

  const [employeeList, setEmployeeList] = useState([]);
  const empCollection = collection(db, 'employee');

  useEffect(() => {
    const getEmpList = async () => {
      try {
        const data = await getDocs(empCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setEmployeeList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getEmpList();
  }, []);

  const tasksCollectionRef = collection(db, 'tasks');

  const onSubmitTask = async (e) => {

    e.preventDefault();
    setMessage('');
    if(!newTaskDueDate.match(dueDateRegex)){
      setMessage({ error: true, msg: 'The due date digits must be separated by " / ", example: 12/03/2023!' });
      return;
    }
    if (newTaskTitle == '' || newTaskDescription == '' || newTaskAssignedEmp == '' || newTaskDueDate == '') {
      setMessage({ error: true, msg: 'All fields are mandatory!' });
      return;
    }

    try {
      await addDoc(tasksCollectionRef, {
        title: newTaskTitle,
        description: newTaskDescription,
        assignedEmp: newTaskAssignedEmp,
        dueDate: newTaskDueDate,
      })
      routeHomeChange();
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <div className="alert-div">
        {
          message?.msg && (
            <Alert
              severity={message?.error ? 'error' : null}
              dismissible
              onClose={() => setMessage('')}
            >
              {' '}
              {message?.msg}
            </Alert>
          )
        }
      </div>
      <Box className='create-emp-card-box'>
        <p className="full-name-p">Title</p>
        <TextField
          className="full-name"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <p className="emp-input-p">Description</p>
        
        <TextareaAutosize
          className="email"
          maxRows={1}
          style={{ width: '27.5vw', backgroundColor: '#e6f0f1', height: '7vh', fontFamily: 'Arial', fontSize: '1rem' }}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />

        <p className="emp-input-p">Assigned employee</p>
        <Select
          className="assigned-emp-select"
          value={newTaskAssignedEmp}
          onChange={(e) => setNewTaskNewTaskAssignedEmp(e.target.value)}
        >
          {
            employeeList.map((emp) => (
              <MenuItem value={emp.fullName}>{emp.fullName}</MenuItem>
              
            ))
          }
        </Select>

        <p className="emp-input-p">Due date</p>
        <TextField
          className="phone-number"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={(e) => setNewTaskDueDate(e.target.value)}

        />

        <Button
          variant="contained"
          className="sbmt-emp-btn"
          onClick={onSubmitTask}
        >
          Create
        </Button>
      </Box>
    </>
  )
}