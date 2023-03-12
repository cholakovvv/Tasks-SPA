import '../components/styles/styles.scss';
import { TaskInput } from '../components/create-emp-tasks-forms/TaskInput';
import { CreateTaskEmployeeBtn } from '../components/buttons/CreateTaskEmployeeBtn';
import { HomeBtn } from '../components/buttons/HomeBtn';

export const CreateTaskCardForm = () => {
  return (
    <>
    <HomeBtn />
    <CreateTaskEmployeeBtn />
    <TaskInput />
    </>
  )
}