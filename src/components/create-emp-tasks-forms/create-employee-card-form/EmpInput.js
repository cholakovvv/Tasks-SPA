import { Box, TextField } from "@mui/material";
import '../../styles/styles.scss';
import Button from '@mui/material/Button';
import { db } from '../../../config/firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";


export const EmpInput = () => {

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  }

  const [newEmpFullName, setNewEmpFullName] = useState('');
  const [newEmpEmail, setNewEmpEmail] = useState('');
  const [newEmpBirthDate, setNewEmpBirthDate] = useState('');
  const [newEmpPhoneNum, setNewEmpPhoneNum] = useState(0);
  const [newEmpSalary, setNewEmpSalary] = useState(0);

  const [message, setMessage] = useState({ error: false, msg: '' });

  const empCollectionRef = collection(db, 'employee');

  const onSubmitEmployee = async (e) => {

    e.preventDefault();
    setMessage('');
    if (newEmpFullName == '' || newEmpEmail == '' || newEmpBirthDate == '' || newEmpPhoneNum == '' || newEmpSalary == '') {
      setMessage({ error: true, msg: 'All fields are mandatory!' });
      return;
    }

    try {
      await addDoc(empCollectionRef, {
        fullName: newEmpFullName,
        email: newEmpEmail,
        birthDate: newEmpBirthDate,
        phoneNumber: newEmpPhoneNum,
        salary: newEmpSalary,
      });
      routeChange();
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

  }

  return (
    <>
      <div className="alert-div">
        {
          message?.msg && (
            <Alert
              severity={message?.error ? 'error' : null}
              dismissible
              onClose={() => setMessage('')}
            >
              {' '}
              {message?.msg}
            </Alert>
          )
        }
      </div>
      <Box className='create-emp-card-box'>
        <p className="full-name-p">Full name</p>
        <TextField
          className="full-name"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw', }}
          onChange={(e) => setNewEmpFullName(e.target.value)}
        />
        
        <p className="emp-input-p">Email</p>
        <TextField
          className="email"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={(e) => setNewEmpEmail(e.target.value)}

        />
        <p className="emp-input-p">Birth date</p>
        <TextField
          className="birth-date"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={(e) => setNewEmpBirthDate(e.target.value)}

        />
        <p className="emp-input-p">Phone number</p>
        <TextField
          className="phone-number"
          variant="outlined"
          type="number"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={(e) => setNewEmpPhoneNum(e.target.value)}

        />
        <p className="emp-input-p">Salary</p>
        <TextField
          className="salary"
          variant="outlined"
          type="number"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={(e) => setNewEmpSalary(e.target.value)}

        />

        <Button
          variant="contained"
          className="sbmt-emp-btn"
          onClick={onSubmitEmployee}
        >
          Create
        </Button>
      </Box>
    </>
  )
}