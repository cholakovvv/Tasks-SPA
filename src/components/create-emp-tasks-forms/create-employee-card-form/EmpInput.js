import { TextField } from "@mui/material";
import '../../styles/styles.scss';
import Button from '@mui/material/Button';
import { db } from '../../../config/firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export const EmpInput = () => {

  const [newEmpFullName, setNewEmpFullName] = useState('');
  const [newEmpEmail, setNewEmpEmail] = useState('');
  const [newEmpBirthDate, setNewEmpBirthDate] = useState('');
  const [newEmpPhoneNum, setNewEmpPhoneNum] = useState(0);
  const [newEmpSalary, setNewEmpSalary] = useState(0);



  const empCollectionRef = collection(db, 'employee');

  const onSubmitEmployee = async () => {
    try {
      await addDoc(empCollectionRef, {
        fullName: newEmpFullName,
        email: newEmpEmail,
        birthDate: newEmpBirthDate,
        phoneNumber: newEmpPhoneNum,
        salary: newEmpSalary,
      })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <p className="full-name-p">Full name</p>
      <TextField
        className="full-name"
        variant="outlined"
        sx={{ backgroundColor: '#e6f0f1', width: '28vw' }}
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
      >
        <Link to='/' 
        className="create-employee-link"
        onClick={onSubmitEmployee}
        >
          Create</Link>
      </Button>

    </>
  )
}