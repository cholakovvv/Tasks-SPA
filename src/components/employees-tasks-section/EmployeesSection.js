import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import './empsTasksSections.scss';
import EmpDataService from '../../services/empServices';
import { db } from '../../config/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";

export const EmpSection = () => {

    const navigate = useNavigate();
  const routeShowAllEmpsChange = () => {
    let path = `/show-all-employees`;
    navigate(path);
  }

    const [seeAllEmpsOpen, setSeeAllEmpsOpen] = useState(false);

    const showAllClick = () => {
        setSeeAllEmpsOpen(true);
        routeShowAllEmpsChange();
    } 


    const [empId, setEmpId] = useState('');

    const fullNameRegex = /[A-Z][a-z]+ [A-Z][a-z]+/g;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;
    const birthDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    const [newFullName, setNewFullName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newBirthDate, setNewBirthDate] = useState('');
    const [newPhoneNum, setNewPhoneNum] = useState('');
    const [newSalary, setNewSalary] = useState(0);
    const [newDoneTasks, setNewDoneTasks] = useState(0);

    const [message, setMessage] = useState({ error: false, msg: '' });

    const [emps, setEmps] = useState([]);
    const [mapState, setMapState] = useState(null);
    let editMap = new Map();

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const data = await EmpDataService.getAllEmployees();
        setEmps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        data.docs.map((doc) => {
            editMap.set(doc.id, false);
        });
    }

    const deleteEmployee = async (id) => {
        try {
            await EmpDataService.deleteEmployee(id);
            getEmployees();
        } catch (err) {
            console.error(err);
        }
    }

    const editEmployee = async (id) => {
        editMap.set(id, true);
        setMapState(editMap);
    }

    const saveEdit = async (id) => {

        setMessage('');
        if (newFullName == '' || newEmail == '' || newBirthDate == '' || newPhoneNum == '' || newSalary == '') {
            setMessage({ error: true, msg: 'All fields are mandatory!' });
            return;
        }
        if (!newFullName.match(fullNameRegex)) {
            setMessage({ error: true, msg: 'Name and family must start with capital letter!' });
            return;
        }
        if (!newEmail.match(emailRegex)) {
            setMessage({ error: true, msg: 'Misspelled email!' });
            return;
        }
        if (!newBirthDate.match(birthDateRegex)) {
            setMessage({ error: true, msg: 'The date digits must be separated by " / ", example: 12/02/1999!' });
            return;
        }

        const empDocRef = doc(db, 'employee', empId);
        await updateDoc(empDocRef, {
            fullName: newFullName,
            email: newEmail,
            birthDate: newBirthDate,
            phoneNum: newPhoneNum,
            salary: newSalary,
            doneTasks: newDoneTasks,
        });

        if (newFullName.match(fullNameRegex) && newEmail.match(emailRegex) && newBirthDate.match(birthDateRegex) && newFullName !== '' && newEmail !== '' && newBirthDate !== '' && newPhoneNum !== '' && newSalary !== '') {

            editMap.set(id, false);
            setMapState(editMap);
        }
    }

    return (
        <>
            <Box className='emp-section' >
                <div>
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
                <Button className='show-all-employees' onClick={showAllClick}>Show all employees</Button>
                <div className='employees-tasks-title-div'>Employees:</div>
                <Box className='emp-tasks-section-box'>
                    {
                        emps.map((emp) => (
                            <List className='emp-list'>
                                <ListItemText>
                                    {
                                        mapState?.get(emp.id) ?
                                            <>
                                                <div className='emp-edit-div'>
                                                    <p>Full name: <input className='editInput' onChange={(event) => setNewFullName(event.target.value)} /></p>
                                                    <p>Email: <input className='editInput' onChange={(event) => setNewEmail(event.target.value)} /></p>
                                                    <p>Birth date: <input className='editInput' onChange={(event) => setNewBirthDate(event.target.value)} /></p>
                                                    <p>Phone number: <input className='editInput' onChange={(event) => setNewPhoneNum(event.target.value)} /></p>
                                                    <p>Salary: <input className='editInput' onChange={(event) => setNewSalary(event.target.value)} /></p>
                                                    <p>Done tasks: <input className='editTask' onChange={(e) => setNewDoneTasks(e.target.value)} /></p>
                                                    <p>Id: <input className='editInput' onChange={(event) => setEmpId(event.target.value)} /></p>
                                                    <Button variant="contained" className='edit-emp' onClick={saveEdit}>Save</Button>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className='emp-p-div'>
                                                    <p>Full name: {emp.fullName}</p>
                                                    <p>Email: {emp.email}</p>
                                                    <p>Birth date: {emp.birthDate}</p>
                                                    <p>Phone number: {emp.phoneNumber}</p>
                                                    <p>Salary: {`${emp.salary} lv.`}</p>
                                                    <p>Done tasks: {emp.doneTasks}</p>
                                                    <p>Id: {emp.id}</p>
                                                </div>
                                                <Button variant="contained" className='edit-emp' onClick={() => editEmployee(emp.id)}>Edit</Button>
                                                <Button variant="contained" className='delete-employee' onClick={() => deleteEmployee(emp.id)}>Delete</Button>
                                            </>
                                    }
                                </ListItemText>
                            </List>
                        ))
                    }
                </Box>
            </Box>
        </>
    );
}