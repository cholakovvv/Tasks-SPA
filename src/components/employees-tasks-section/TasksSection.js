import { Box } from '@mui/material';
import '../styles/styles.scss';
import { useState, useEffect } from 'react';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import TaskDataService from '../../services/taskServices';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


let bestEmployees = {};

export const TasksSectionPage = () => {
  
  let bestEmpsArr;

  // const [clicked, setClicked] = useState(false);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   height: 300,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  //   borderRadius: '10px',

  // };

  const completedTask = (task) => {

    if (!bestEmployees.hasOwnProperty(task.assignedEmp)) {
      bestEmployees[task.assignedEmp] = 1
    } else {
      bestEmployees[task.assignedEmp] += 1;
    }

  }

  const bestEmployeesFunc = () => {
    bestEmpsArr = Object.entries(bestEmployees).sort(([, a], [, b]) => b - a);
    setClicked(true);
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
        {/* <div className='best-emps'>
          <Button onClick={bestEmployeesFunc} sx={{color: 'white'}} className='best-emp-btn'>Top employees</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography sx={{ marginLeft: '8vw'}} >
                Top employees:
              </Typography>
              
              
            </Box>
          </Modal>
        </div> */}
        <div className='employees-tasks-title-div'>Tasks:</div>
        <Box className='emp-tasks-section-box' >
          {
            tasks.map((task) => (
              <List className='task-list'>
                <ListItemText>
                  <div className='emp-p-div'>
                    <p>Title: {task.title}</p>
                    <p>Description: {task.description}</p>
                    <p>Assigned employee: {task.assignedEmp}</p>
                    <p>Due date: {task.dueDate}</p>
                  </div>
                  <Button variant="contained" className='completed-task' onClick={() => completedTask(task)}>Complete</Button>
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