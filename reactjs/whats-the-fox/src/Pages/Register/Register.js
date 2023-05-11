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

function Register() {
    const [password, setPassword] = useState();
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const avatar = await axios.get('https://randomfox.ca/floof').then((res) => res.data.image);
        await axios
            .post('https://whats-the-fox.onrender.com/api/v1/auth/resigter', {
                name: data.get('firstName') + ' ' + data.get('lastName'),
                email: data.get('email'),
                password: data.get('password'),
                avatar: avatar,
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
                    Đăng ký thất bại
                </Alert>
            </Snackbar>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        {loading && (
                            <CircularProgress
                                size={20}
                                sx={{ marginRight: '10px', color: 'white' }}
                            />
                        )}
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}

export default Register;
