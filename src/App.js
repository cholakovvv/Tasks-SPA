import { Box } from '@mui/material';
import './components/styles/styles.scss';
import { CreateEmployeeBtn } from './components/create-btns/create-employee-btn/CreateEmployeeBtn';
import { CreateTaskBtn } from './components/create-btns/create-task-btn/CreateTaskBtn';

function App() {
  return (
    <>
      <Box >
        <CreateTaskBtn />
        <CreateEmployeeBtn />
      </Box>
      <Box className='create-emp-card-form'>
      </Box>
    </>
  );
}

export default App;
