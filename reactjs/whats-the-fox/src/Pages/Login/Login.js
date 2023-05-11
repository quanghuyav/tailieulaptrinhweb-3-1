import { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../../context/context';
import { getCurrentUser } from '../../reducer/actions';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../Components/Copyright/Copyright';
import { Link as RouterLink } from 'react-router-dom';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert, CircularProgress, Snackbar } from '@mui/material';

function Login() {
    const { state, dispatch } = useContext(AppContext);
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        await axios
            .post('https://whats-the-fox.onrender.com/api/v1/auth/login', {
                email: data.get('email'),
                password: data.get('password'),
            })
            .then((res) => {
                dispatch(getCurrentUser(res.data.data));
                localStorage.setItem('token', res.data.data.token);
                setLoading(false);
                navigate('/');
            })
            .catch(() => {
                setOpenAlert(true);
                setLoading(false);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{ marginTop: '100px' }}
                open={openAlert}
                autoHideDuration={2000}
                onClose={() => setOpenAlert(false)}
            >
                <Alert onClose={() => setOpenAlert(false)} severity="error" sx={{ width: '100%' }}>
                    Đăng nhập thất bại
                </Alert>
            </Snackbar>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {loading && (
                            <CircularProgress
                                size={20}
                                sx={{ marginRight: '10px', color: 'white' }}
                            />
                        )}
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link component={RouterLink} href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export default Login;
