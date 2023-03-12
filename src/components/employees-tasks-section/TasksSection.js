import { Box } from '@mui/material';
import './empsTasksSections.scss';
import { useState, useEffect } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import TaskDataService from '../../services/taskServices';
import { db } from '../../config/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const TasksSectionPage = () => {

  const dueDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newAssEmp, setNewAssEmp] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const [taskId, setTaskId] = useState('');
  const [message, setMessage] = useState({ error: false, msg: '' });

  const [mapState, setMapState] = useState(null);
  let editMap = new Map();

  const editTask = async (id) => {
    editMap.set(id, true);
    setMapState(editMap);
  }

  const saveEdit = async (id) => {

    setMessage('');
    if (newTitle == '' || newDescription == '' || newAssEmp == '' || newDueDate == '') {
      setMessage({ error: true, msg: 'All fields are mandatory!' });
      return;
    }
    if (!newDueDate.match(dueDateRegex)) {
      setMessage({ error: true, msg: 'The date digits must be separated by " / ", example: 12/02/1999!' });
      return;
    }

    const empDocRef = doc(db, 'tasks', taskId);
    await updateDoc(empDocRef, {
      title: newTitle,
      description: newDescription,
      assignedEmp: newAssEmp,
      dueDate: newDueDate,
    });

    if (newTitle !== '' && newDescription !== '' && newAssEmp !== '' && newDueDate !== '') {
      editMap.set(id, false);
      setMapState(editMap);
    }
  }

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const data = await TaskDataService.getAllTasks();
    setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const deleteTask = async (id) => {
    try {
      await TaskDataService.deleteTask(id);
      getTasks();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Box className='tasks-section' >
      <div className="emp-alert-div">
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
      <div className='employees-tasks-title-div'>Tasks:</div>
      <IconButton className='search-icon'>
                <SearchIcon /> Search 
                </IconButton>
      <Box className='emp-tasks-section-box' >
        {
          tasks.map((task) => (
            <List className='task-list'>
              <ListItemText>
                {
                  mapState?.get(task.id) ?
                    <>
                      <div className='emp-p-div'>
                        <p>Title: <input className='editTask' onChange={(e) => setNewTitle(e.target.value)} /></p>
                        <p>Description: <input className='editTask' onChange={(e) => setNewDescription(e.target.value)} /></p>
                        <p>Assigned employee: <input className='editTask' onChange={(e) => setNewAssEmp(e.target.value)} /></p>
                        <p>Due date: <input className='editTask' onChange={(e) => setNewDueDate(e.target.value)} /></p>
                        <p>Id: <input className='editTask' onChange={(e) => setTaskId(e.target.value)} /></p>

                      </div>
                      <Button variant="contained" className='edit-task' onClick={saveEdit}>Save</Button>
                    </>
                    :
                    <>
                      <div className='emp-p-div'>
                        <p>Title: {task.title}</p>
                        <p>Description: {task.description}</p>
                        <p>Assigned employee: {task.assignedEmp}</p>
                        <p>Due date: {task.dueDate}</p>
                        <p>Id: {task.id}</p>
                      </div>
                      <Button variant="contained" className='edit-task' onClick={() => editTask(task.id)}>Edit</Button>
                      <Button variant="contained" className='delete-task' onClick={() => deleteTask(task.id)}>Delete</Button>
                    </>
                }
              </ListItemText>
            </List>
          ))
        }
      </Box>
    </Box>
  )
}