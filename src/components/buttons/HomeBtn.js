import './buttons.scss'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export const HomeBtn = () => {

  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  }

  return (
      <Button
        variant="contained"
        className='home-btn'
        onClick={routeChange}
      >
        Home
      </Button>
  )
}