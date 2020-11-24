import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { Link as RouterLink, Navigate } from "react-router-dom";
import { ROLE } from "src/utils/constance";
import { setLocalRole } from "src/utils/mng-role";
import { setLocalToken } from "src/utils/mng-token";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link component={RouterLink} to="/">
        B4E Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [state, setState] = useState({
    email: "",
    password: "",
    repassword: "",
    role: ROLE.STUDENT,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [redirect, setRedirect] = useState(null);

  async function hdSubmit(e) {
    e.preventDefault();
    let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/acc/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });
    if (!response.ok) {
      const errors = await response.json();
      setErrors(errors);
    } else {
      const result = await response.json();
      setLocalToken(result.token);
      setLocalRole(result.role);
      setErrors(null);
      setSuccess("Đăng kí tài khoản thành công!");
      setTimeout(() => setRedirect(<Navigate to="/nh" replace={true}></Navigate>), 1000);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {redirect}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h3">
          Đăng kí tài khoản
        </Typography>
        <div>
          {success ? (
            <Alert className={classes.alert} severity="success" onClose={() => setSuccess(null)}>
              {success}
            </Alert>
          ) : null}
        </div>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={state.email}
                onChange={(e) => {
                  setState({ ...state, email: e.target.value });
                  setErrors(null);
                }}
                error={errors?.email}
                helperText={errors?.email}
                disabled={Boolean(success)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Mật khẩu"
                type="password"
                id="password"
                value={state.password}
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                  setErrors(null);
                }}
                error={errors?.password}
                helperText={errors?.password}
                disabled={Boolean(success)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Nhập lại mật khẩu"
                type="password"
                id="rePassword"
                value={state.repassword}
                onChange={(e) => {
                  setState({ ...state, repassword: e.target.value });
                  setErrors(null);
                }}
                error={errors?.repassword}
                helperText={errors?.repassword}
                disabled={Boolean(success)}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={hdSubmit}>
            Đăng kí
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/dang-nhap">
                Bạn đã có tài khoản rồi? Đăng nhập
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
