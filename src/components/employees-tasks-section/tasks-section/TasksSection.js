import { Box } from '@mui/material';
import '../../styles/styles.scss';
import { db } from '../../../config/firebase-config';
import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';


export const TasksSectionPage = () => {

  const deleteTask = async (id) => {
    const taskDoc = doc(db, 'tasks', id);
    try {
      await deleteDoc(taskDoc);
    } catch (err) {
      console.error(err);
    }
  }

  const [taskList, setTaskList] = useState([]);

  const tasksCollection = collection(db, 'tasks');

  useEffect(() => {
    const getTaskList = async () => {
      try {
        const data = await getDocs(tasksCollection);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setTaskList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTaskList();
  }, []);

  return (
    <Box className='tasks-section' >
      <div className='employees-tasks-title-div'>Free tasks:</div>
      <Box className='emp-tasks-section-box' >
        {
          taskList.map((task) => (
            <List className='task-list'>
              <ListItemText>
                <div className='emp-p-div'>
                  <p>Title: {task.title}</p>
                  <p>Description: {task.description}</p>
                  <p>Assigned employee: {task.assignedEmp}</p>
                  <p>Due date: {task.dueDate}</p>
                </div>
                <Button variant="contained" className='add-employee'>Add employee</Button>
                <Button variant="contained" className='edit-task'>Edit</Button>
                <Button variant="contained" className='delete-task' onClick={() => deleteTask(task.id)}>Delete</Button>
              </ListItemText>
            </List>
          ))
        }
      </Box>
    </Box>
  )
}