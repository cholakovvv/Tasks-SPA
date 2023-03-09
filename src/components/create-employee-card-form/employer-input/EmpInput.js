import {  TextField } from "@mui/material";
import '../../styles/styles.scss';
import Button from '@mui/material/Button';


export const BirthDate = () => {
  return (
    <TextField
    className="birth-date"
    variant="outlined" 
    label='Birth date...'
    type="number"
    sx={{backgroundColor: '#bbe4e9', width: '28vw'}}
     />
  );
};

export const Email = () => {
    return (
      <TextField
      className="email"
      variant="outlined" 
      label='Email...'
      sx={{backgroundColor: '#bbe4e9', width: '28vw'}}
       />
    );
  };

export const FullName = () => {
    return (
      <TextField
      className="full-name"
      variant="outlined" 
      label='Full name...'
      sx={{backgroundColor: '#bbe4e9', width: '28vw'}}
       />
    );
  };

  export const PhoneNumber = () => {
    return (
      <TextField
      className="phone-number"
      variant="outlined" 
      label='Phone number...'
      type="number"
      sx={{backgroundColor: '#bbe4e9', width: '28vw'}}
       />
    );
  };

  export const Salary = () => {
    return (
      <TextField
      className="salary"
      variant="outlined" 
      label='Salary...'
      type="number"
      sx={{backgroundColor: '#bbe4e9', width: '28vw'}}
       />
    );
  };

  export const SubmitEmpBtn = () => {
    return (
        <Button variant="contained" className="sbmt-emp-btn">Create</Button>
    )
  }