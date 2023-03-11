import { Box } from '@mui/material';
import '../components/styles/styles.scss';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { EmpSection } from '../components/employees-tasks-section/emp-section/EmployeesSection';
import { TasksSectionPage } from '../components/employees-tasks-section/tasks-section/TasksSection';
import { EmpInfo } from '../components/employees-tasks-section/emp-section/emp-info/EmployeeInfo';
import {useState} from 'react'

const [openEmpInfo, setOpenEmpInfo] = useState(false);

export const openInfoHandler = (e) => {
  e.preventDefault();
  setOpenEmpInfo(state => !state);
}

export const Home = () => {

  return (
    <>
      <Box >

        <CreateTaskEmployeeBtn />
        <EmpInfo open={openEmpInfo} />
        <Box className='emp-tasks-sections'>
          <EmpSection />
          <TasksSectionPage />
        </Box>
      </Box>
      <Box className='create-emp-card-form'>
      </Box>
    </>
  );
}
