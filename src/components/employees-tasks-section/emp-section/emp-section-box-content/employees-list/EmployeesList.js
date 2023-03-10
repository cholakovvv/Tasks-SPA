import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Button from '@mui/material/Button';

export const EmployeeList = () => {

    return (
        <List className='list'>
            <ListItemText>
                Simeon Cholakov
                <Button variant="contained" className='employee-tasks'>Employee tasks</Button>
                <Button variant="contained" className='employee-info'>Employee info</Button>
            </ListItemText>
        </List>
    );
}