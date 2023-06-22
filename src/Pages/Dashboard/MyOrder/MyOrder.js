import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Button } from 'react-bootstrap';

const MyOrder = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        const url = `https://powerful-ravine-22225.herokuapp.com/userProducts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Delete products
    const handleDeleteProduct = id => {
        const proceed = window.confirm("Are you sure , you want to delete it?");
        if (proceed) {
            fetch(`https://powerful-ravine-22225.herokuapp.com/userProducts/${id}`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },

            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        setControl(!control);
                        alert("Data deleted successSully");
                    } else {
                        setControl(false);
                    }
                });
            console.log(id);
        }
    };
    return (
        <div>
            <h2>My order </h2>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell align="right">Products Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="right">${row.name}</TableCell>
                                <TableCell align="right">${row.price}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right"> <Button onClick={() => handleDeleteProduct(row._id)}>Delete</Button> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;