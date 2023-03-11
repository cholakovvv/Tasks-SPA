import { Box } from '@mui/material';
import '../components/styles/styles.scss';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { EmpSection } from '../components/employees-tasks-section/emp-section/EmployeesSection';
import { TasksSectionPage } from '../components/employees-tasks-section/tasks-section/TasksSection';

export const Home = () => {
  
  
  return (
    <>
      <Box >
        <CreateTaskEmployeeBtn />
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
