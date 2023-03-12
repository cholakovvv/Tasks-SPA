import { EmpInput } from '../components/create-emp-tasks-forms/EmpInput'
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