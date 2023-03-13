import { useEffect, useState } from 'react';
import '../components/styles/allEmps.scss'
import '../components/styles/homeTop5Style.scss';
import EmpDataService from '../services/empServices';
import { HomeBtn } from '../components/buttons/HomeBtn';

export const ShowAllEmps = () => {

    const [emps, setEmps] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await EmpDataService.getAllEmployees();
            const empData = data.docs.map(emp => emp.data());
            setEmps(empData);
        })()
    }, [])

    return (
        <div>
            <HomeBtn />
            {
                emps.length > 0 ? <table className='all-emps-table'>
                    <tr>
                        <th className='table-header'>Full Name</th>
                        <th className='table-header'>Email</th>
                        <th className='table-header'>Phone Number</th>
                        <th className='table-header'>Monthly salary</th>
                        <th className='table-header'>Date of birth</th>
                    </tr>
                    {
                        emps.map((emp, index) => {
                            if (emp) {
                                return <tr key={index} >
                                    <td className='single-data'>{emp.fullName}</td>
                                    <td className='single-data'>{emp.email}</td>
                                    <td className='single-data'>{emp.phoneNum}</td>
                                    <td className='single-data'>{emp.salary} lv.</td>
                                    <td className='single-data'>{emp.birthDate}</td>
                                </tr>
                            }
                        })
                    }
                </table> : null
            }
        </div>
    )
}