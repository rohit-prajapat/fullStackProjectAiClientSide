import React, { useState } from 'react'
import { Container, TextField, Button, Typography, Box, Paper, Collapse, Alert } from '@mui/material';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SummaryAiTools = () => {
    const[text,setText] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault(); 
        // e.preventDefault();
        console.log(text);
        const { data } = await axios.post('http://localhost:8083/summary', { text });
        console.log(data);
    }
    
  return (

        <Container component={Paper} elevation={4} maxWidth="xs" sx={{ padding: 3, marginTop: 8 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                
                <TextField
                    fullWidth
                    margin="normal"
                    label="text"
                    name={text}
                    onChange={(e) => setText(e.target.value)}
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
  )
}

export default SummaryAiTools
