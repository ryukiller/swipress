import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Login() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={4}
        >
          <Grid item>
            <Typography variant="h1" component="h1">
              Login
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              required
              id="standard-required"
              label="Username"
              variant="standard"
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id="login-password"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Login</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
