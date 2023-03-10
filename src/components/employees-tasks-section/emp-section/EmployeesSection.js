import { Box } from '@mui/material';
import '../../styles/styles.scss';
import { EmpSectionBox } from './emp-section-box-content/EmpSectionBox';


export const EmpSection = () => {
  return (
    <Box className='emp-section' >
      <div className='employees-tasks-title-div'>Employees:</div>
      <EmpSectionBox />
    </Box>
  )
}