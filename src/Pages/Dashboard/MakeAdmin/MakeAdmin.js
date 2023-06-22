import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://powerful-ravine-22225.herokuapp.com/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault(user);
    }
    return (
        <div>
            <h2>make an admin</h2>
            <Form onSubmit={handleAdminSubmit}>
                <TextField
                    id="outlined-basic"
                    type="email"
                    label="email"
                    onBlur={handleOnBlur}
                    variant="outlined" />
                <br /> <br />
                <Button type="submit" variant="contained">Make Admin</Button>
            </Form>
            {success && <Alert severity="success">Made Admin successfully! joss</Alert>}
        </div>
    );
};
export default MakeAdmin;


