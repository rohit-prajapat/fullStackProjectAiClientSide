import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper, Collapse, Alert } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/v1/auth/login', {email, password });
            toast.success('User Registered Successfully');

            navigate('/');
        } catch (err) {
            console.log(` 'error is here : -> '${err.message}`);
             if (err.response.data.error) {
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
               Login
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <Collapse in={!!error}>
                    <Alert severity='error'>{error}</Alert>
                </Collapse>
               
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                    Login
                </Button>
            </Box>
        </Container>
    );
};

export default Login;


