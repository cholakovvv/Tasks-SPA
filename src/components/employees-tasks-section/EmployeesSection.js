import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import '../styles/styles.scss';
import EmpDataService from '../../services/empServices';
import { TextareaAutosize } from '@mui/material';



export const EmpSection = ({ getEmpId }) => {

    const [emps, setEmps] = useState([]);
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const data = await EmpDataService.getAllEmployees();
        setEmps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
        setEditable(true)
    }


    return (
        <Box className='emp-section' >
            <div className='employees-tasks-title-div'>Employees:</div>
            <Box className='emp-tasks-section-box'>
                {
                    emps.map((emp) => (
                        <List className='emp-list'>
                            <ListItemText>
                                {
                                    !editable ?
                                        <>
                                            <div className='emp-p-div'>
                                                <p>Full name: {emp.fullName}</p>
                                                <p>Email: {emp.email}</p>
                                                <p>Birth date: {emp.birthDate}</p>
                                                <p>Phone number: {emp.phoneNumber}</p>
                                                <p>Salary: {emp.salary}</p>
                                            </div>
                                            <Button variant="contained" className='edit-emp' onClick={editEmployee}>Edit</Button>
                                            <Button variant="contained" className='delete-employee' onClick={() => deleteEmployee(emp.id)}>Delete</Button>
                                        </>
                                        :
                                        <div className='emp-p-div'>
                                            <p>Full name: <TextareaAutosize style={{ width: '3vw', height: '1vh' }} /></p>
                                            <p>Email: <TextareaAutosize style={{ width: '3vw', height: '1vh' }} /></p>
                                            <p>Birth date: <TextareaAutosize style={{ width: '3vw', height: '1vh' }} /></p>
                                            <p>Phone number: <TextareaAutosize style={{ width: '3vw', height: '1vh' }} /></p>
                                            <p>Salary: <TextareaAutosize style={{ width: '3vw', height: '1vh' }} /></p>
                                        </div>
                                }


                            </ListItemText>
                        </List>
                    ))
                }
            </Box>
        </Box>
    );
}