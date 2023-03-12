import { Box } from '@mui/material';
import '../components/styles/styles.scss';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { EmpSection } from '../components/employees-tasks-section/EmployeesSection';
import { TasksSectionPage } from '../components/employees-tasks-section/TasksSection';
import { useState } from 'react';

export const Home = () => {

  const [empId, setEmpId] = useState('');

  const getEmpIdHandler = (id) => {
    console.log(id);
    setEmpId(id);
  }

  return (
    <>
      <Box >
        <Box className='header'>
          <CreateTaskEmployeeBtn />
        </Box>
        <Box className='emp-tasks-sections'>
          <EmpSection getEmpId={getEmpIdHandler} />
          <TasksSectionPage />
        </Box>
      </Box>
      <Box className='create-emp-card-form'>
      </Box>
    </>
  );
}
