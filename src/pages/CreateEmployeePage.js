import '../components/styles/styles.scss';
import { Box } from '@mui/material';
import { EmpInput } from '../components/create-emp-tasks-forms/create-employee-card-form/EmpInput'
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { HomeBtn } from '../components/buttons/HomeBtn';

export const CreateEmployeePage = () => {

  return (
    <>
      <HomeBtn />
      <CreateTaskEmployeeBtn />
      <Box className='create-emp-card-box'>
        <EmpInput />
      </Box>
    </>
  )
}