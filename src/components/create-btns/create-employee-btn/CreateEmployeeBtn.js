import { React, useState } from 'react';
import { CreateEmpCardForm } from '../../create-employee-card-form/CreateEmpCardForm'
import '../../styles/styles.scss'
import Button from '@mui/material/Button';

export const CreateEmployeeBtn = () => {

  const [clicked, setClicked] = useState(false);

  const onClickHandler = () => {
    setClicked(state => !state);
  }

  return (
    <>
      <Button
        variant="contained"
        className='create-employee'
        onClick={onClickHandler}>
        Create employee card
      </Button>
      {
        clicked ? <CreateEmpCardForm /> : null
      }
    </>
  )
}