import '../styles/styles.scss'
import { Box } from '@mui/material';
import { FullName } from './employer-input/EmpInput';
import { Email } from './employer-input/EmpInput';
import { PhoneNumber } from './employer-input/EmpInput';
import { BirthDate } from './employer-input/EmpInput';
import { Salary } from './employer-input/EmpInput';
import { SubmitEmpBtn } from './employer-input/EmpInput';

export const CreateEmpCardForm = () => {
  return (
    <Box className='create-emp-card-box'>
      <FullName />
      <Email />
      <PhoneNumber />
      <BirthDate />
      <Salary />
      <SubmitEmpBtn />
    </Box>
  )
}


