import '../components/styles/styles.scss';
import { Box } from '@mui/material';
import { TaskInput } from '../components/create-emp-tasks-forms/create-task-form/TaskInput';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { HomeBtn } from '../components/buttons/HomeBtn';

export const CreateTaskCardForm = () => {
  return (
    <>
    <HomeBtn />
    <CreateTaskEmployeeBtn />
    <Box className='create-emp-card-box'>
    <TaskInput />
    </Box>
    </>
  )
}