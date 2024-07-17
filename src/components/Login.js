import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@material-ui/core';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    axios.post('/api/users/login', user)
      .then(res => {
        localStorage.setItem('jwtToken', res.data.token);
        // Redirect or show success message
      })
      .catch(err => {
        console.error(err);
        // Show error message
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;

