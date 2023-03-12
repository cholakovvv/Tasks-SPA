import './buttons.scss'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const CreateTaskEmployeeBtn = () => {

  const navigate = useNavigate();
  
  const routeCrtEmpChange = () => {
    let path = `/create-employee`;
    navigate(path);
  }
  const routeCrtTaskChange = () => {
    let path = `/create-task`;
    navigate(path);
  }

  return (
    <>
      <Button
        variant="contained"
        className='create-employee'
        onClick={routeCrtEmpChange}
      >
        Create employee card
      </Button>

      <Button
        variant="contained"
        className='create-task'
        onClick={routeCrtTaskChange}
      >
        Create task
      </Button>
    </>
  )
}