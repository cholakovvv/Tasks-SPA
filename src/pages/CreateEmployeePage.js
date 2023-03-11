import '../components/styles/styles.scss';
import { EmpInput } from '../components/create-emp-tasks-forms/create-employee-card-form/EmpInput'
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { HomeBtn } from '../components/buttons/HomeBtn';

export const CreateEmployeePage = () => {

  return (
    <>
      <HomeBtn />
      <CreateTaskEmployeeBtn />
      <EmpInput />
    </>
  )
}