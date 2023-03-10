import '../styles/styles.scss'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const CreateTaskEmployeeBtn = () => {

  return (
    <>
      <Button
        variant="contained"
        className='create-employee'
      >
        <Link to='/create-employee' className='create-employee-link'>Create employee card</Link>
      </Button>
      <Button
        variant="contained"
        className='create-task'
      >
        <Link to='/create-task' className='create-employee-link'>Create task</Link>
      </Button>
    </>
  )
}