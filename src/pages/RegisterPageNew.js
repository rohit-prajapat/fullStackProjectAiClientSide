
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Collapse, Alert } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPageNew = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            {console.log("username and password : in client side :",username,password)}
            console.log('registration post method is about to calling .. ');
            const { data } = await axios.post('http://localhost:8083/register', { username, password });
            console.log("Login succefhllh: ",data);
            toast.success('User Registered Successfully');
            navigate('/');
        } catch (err) {

            console.log("error is present : ");
            if (err.response && err.response.data && err.response.data.error) {
                setError(err.response.data.error);
            } else if (err.message) {
                setError(err.message);
            }
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <Container component={Paper} elevation={4} maxWidth="xs" sx={{ padding: 3, marginTop: 8 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <Collapse in={!!error}>
                    <Alert severity='error'>{error}</Alert>
                </Collapse>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        marginTop: 2,
                        padding: '12px 0',
                        fontSize: '16px',
                    }}
                 
                >
                    Sign Up
                </Button>
            </Box>
        </Container>
    );
};

export default RegisterPageNew;



