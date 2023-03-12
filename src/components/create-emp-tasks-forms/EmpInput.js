import { Box, TextField } from "@mui/material";
import '../styles/styles.scss';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import EmpDataService from '../../services/empServices';

export const EmpInput = () => {

  const fullNameRegex = /[A-Z][a-z]+ [A-Z][a-z]+/g;
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
  const birthDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  }

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNum, setPhoneNum] = useState(0);
  const [salary, setSalary] = useState(0);

  const [message, setMessage] = useState({ error: false, msg: '' });

  const onChangeFullName = (e) => {
    setFullName(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeBirthDate = (e) => {
    setBirthDate(e.target.value)
  }
  const onChangePhoneNum = (e) => {
    setPhoneNum(e.target.value)
  }
  const onChangeSalary = (e) => {
    setSalary(e.target.value)
  }

  const onSubmitEmployee = async (e) => {

    e.preventDefault();
    setMessage('');
    if (!fullName.match(fullNameRegex)) {
      setMessage({ error: true, msg: 'Name and family must start with capital letter!' });
      return;
    }
    if (!email.match(emailRegex)) {
      setMessage({ error: true, msg: 'Misspelled email!' });
      return;
    }
    if (!birthDate.match(birthDateRegex)) {
      setMessage({ error: true, msg: 'The date digits must be separated by " / ", example: 12/02/1999!' });
      return;
    }

    if (fullName == '' || email == '' || birthDate == '' || phoneNum == '' || salary == '') {
      setMessage({ error: true, msg: 'All fields are mandatory!' });
      return;
    }

    const newEmp = {
      fullName,
      email,
      birthDate,
      phoneNum,
      salary,
    };

    try {
      await EmpDataService.addEmployee(newEmp);
    } catch (err) {
      console.log(err);
    }
    routeChange();
    setFullName('');
    setEmail('');
    setBirthDate('');
    setPhoneNum('');
    setSalary('');
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
          onChange={onChangeFullName}
        />

        <p className="emp-input-p">Email</p>
        <TextField
          className="email"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={onChangeEmail}

        />
        <p className="emp-input-p">Birth date</p>
        <TextField
          className="birth-date"
          variant="outlined"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={onChangeBirthDate}
        />

        <p className="emp-input-p">Phone number</p>
        <TextField
          className="phone-number"
          variant="outlined"
          type="number"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={onChangePhoneNum}

        />
        <p className="emp-input-p">Salary</p>
        <TextField
          className="salary"
          variant="outlined"
          type="number"
          sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
          onChange={onChangeSalary}

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