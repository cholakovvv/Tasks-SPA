import { Box } from '@mui/material';
import '../../../styles/styles.scss';
import { EmployeeList } from './employees-list/EmployeesList';

export const EmpSectionBox = () => {
  return (
    <Box className='emp-tasks-section-box' >
        <EmployeeList />
    </Box>
  )
}