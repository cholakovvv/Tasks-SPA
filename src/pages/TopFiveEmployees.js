import { useState, useEffect } from 'react';
import { db } from '../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import { Box } from '@mui/material';
import { HomeBtn } from '../components/buttons/HomeBtn';
import '../components/styles/homeTop5Style.scss';

export const TopFiveEmployees = () => {

    const empsCollectionRef = collection(db, "employee");
    const [topFiveEmployees, setTopFiveEmployees] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getDocs(empsCollectionRef);

            const empData = data.docs.map(item => item.data())
            const sorted = [];

            for (let item of empData) {
                sorted.push([item.doneTasks, item.fullName])
            }
            sorted.sort((a, b) => b[0] - a[0])
            const getFirstFive = sorted.slice(0, 5);

            setTopFiveEmployees([...getFirstFive]);
        })()
    }, [])
    return (
        <>
            <HomeBtn />
            <Box className='top-5-box'>
                <div className='top-5-div'>TOP 5 EMPLOYEES</div>
                {
                    topFiveEmployees.map((item, index) => {
                        // return <table  className='top-five-employees'>
                        //     <tr>
                        //         <th>{item[1]}</th>
                        //     </tr>
                        //     <tr className='done-tasks'>
                        //         <td>Done tasks: {item[0]}</td>
                        //     </tr>
                        // </table>
                        return (
                            <Box className='name-top-5-box'>
                                <div className='name-div'>{item[1]}</div>
                                <div className='task-div'>{item[0]} completed tasks</div>
                            </Box>
                        )
                    })
                }
            </Box>
        </>
    )
}