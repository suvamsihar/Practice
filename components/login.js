import { Avatar, FormControlLabel, Grid, Paper, TextField } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import React from "react";
const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '20px auto' }
    const avatarStyle = { backgroundColor: "lightblue" }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>

                    <h2>Sign in</h2>
                </Grid>
                <TextField id="standard-basic" label="Username" placeholder="Enter Username" variant="standard" fullWidth required />
                <TextField id="standard-basic" label="Password" placeholder="Enter Password" type={'password'} variant="standard" fullWidth required />
                <Checkbox {...label} />
                Remember me
                <Button variant="contained" fullWidth>Log in</Button>
            </Paper>
        </Grid>
    )
}
export default Login;