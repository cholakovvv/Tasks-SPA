import '../styles/styles.scss'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const HomeBtn = () => {

  return (
      <Button
        variant="contained"
        className='home-btn'
      >
        <Link to='/' className='create-employee-link'>Home</Link>
      </Button>
  )
}