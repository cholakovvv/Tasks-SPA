import { Box } from '@mui/material';
import '../../styles/styles.scss';
import { TasksSectionBox } from './TasksSectionBox';

export const TasksSectionPage = () => {
  return (
    <>
      <Box className='tasks-section' >
        <div className='employees-tasks-title-div'>Free tasks:</div>
        <TasksSectionBox />
      </Box>
    </>
  )
}