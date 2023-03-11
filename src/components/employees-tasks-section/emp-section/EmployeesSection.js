import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { db } from '../../../config/firebase-config';
import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { Box } from '@mui/material';
import '../../styles/styles.scss';


export const EmpSection = () => {

    const deleteEmployee = async (id) => {
        const empDoc = doc(db, 'employee', id);
        try {
            await deleteDoc(empDoc);
        } catch (err) {
            console.error(err);
        }
    }

    const [employeeList, setEmployeeList] = useState([]);

    const empCollection = collection(db, 'employee');

    useEffect(() => {
        const getEmpList = async () => {
            try {
                const data = await getDocs(empCollection);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setEmployeeList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };
        getEmpList();
    }, []);

    return (
        <Box className='emp-section' >
            <div className='employees-tasks-title-div'>Employees:</div>
                <Box className='emp-tasks-section-box'>
                    {
                        employeeList.map((emp) => (
                            <List className='emp-list'>
                                <ListItemText>
                                    <div className='emp-p-div'>
                                        <p>Full name: {emp.fullName}</p>
                                        <p>Email: {emp.email}</p>
                                        <p>Birth date: {emp.birthDate}</p>
                                        <p>Phone number: {emp.phoneNumber}</p>
                                        <p>Salary: {emp.salary}</p>
                                    </div>
                                    <Button variant="contained" className='edit-emp'>Edit</Button>
                                    <Button variant="contained" className='delete-employee' onClick={() => deleteEmployee(emp.id)}>Delete</Button>
                                </ListItemText>
                            </List>
                        ))
                    }
                </Box>
        </Box>
    );
}