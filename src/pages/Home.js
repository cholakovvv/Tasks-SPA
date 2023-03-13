import { Box } from '@mui/material';
import '../components/styles/homeTop5Style.scss';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { EmpSection } from '../components/employees-tasks-section/EmployeesSection';
import { TasksSectionPage } from '../components/employees-tasks-section/TasksSection';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();
  
  const routeTop5Emp = () => {
    let path = `/top-5-employees`;
    navigate(path);
  }

  const [empId, setEmpId] = useState('');

  const getEmpIdHandler = (id) => {
    console.log(id);
    setEmpId(id);
  }

  return (
    <>
      <Box >
        <Box className='header'>
        <Button variant="text" className='top-5-emp' onClick={routeTop5Emp}>Top 5 employees</Button>
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
