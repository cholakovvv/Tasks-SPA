import { Box } from '@mui/material';
import '../components/styles/styles.scss';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { EmpSection } from '../components/employees-tasks-section/emp-section/EmployeesSection';
import { TasksSectionPage } from '../components/employees-tasks-section/tasks-section/TasksSection';
import { db } from "../config/firebase-config";
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';

export const Home = () => {

  // const [employeeList, setEmployeeList] = useState([]);

  // const empCollection = collection(db, 'employee');

  // useEffect(() => {
  //   const getEmpList = async () => {
  //     try {
  //       const data = await getDocs(empCollection);
  //       const filteredData = data.docs.map((doc) => ({
  //         ...doc.data(),
  //         id: doc.id
  //       }));
  //       setEmployeeList(filteredData);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getEmpList();
  // }, []);

  return (
    <>
      <Box >
        {/* <div>
          {
            employeeList.map((emp) => (
              <div>
                <h1>{emp.email}</h1>
              </div>
            )) 
          }
        </div> */}
        <CreateTaskEmployeeBtn />
        <Box className='emp-tasks-sections'>
          <EmpSection />
          <TasksSectionPage />
        </Box>
      </Box>
      <Box className='create-emp-card-form'>
      </Box>
    </>
  );
}
