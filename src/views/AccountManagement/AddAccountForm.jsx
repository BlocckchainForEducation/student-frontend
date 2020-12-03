import { Box, Button, Grid, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { addSawtoothAccount } from "./redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    width: "95%",
    margin: "auto",
    position: "relative",
    padding: theme.spacing(2.5, 2),
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  body: { width: "100%", marginTop: "-32px", padding: theme.spacing(8, 3, 3, 3) },
}));

export default function AddAccountForm(props) {
  const cls = useStyles();
  const [formState, setFormState] = useState({
    publicKey: "",
    privateKey: "",
    note: "",
  });

  const { enqueueSnackbar } = useSnackbar();
  const dp = useDispatch();

  async function hdAddAccount(e) {
    try {
      e.preventDefault();

      let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/sawtooth-accounts`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: getToken() },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const error = await response.json();
        enqueueSnackbar("Something went wrong: " + JSON.stringify(error), { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" } });
      } else {
        dp(addSawtoothAccount(formState));
        setFormState({
          publicKey: "",
          privateKey: "",
          note: "",
        });
        enqueueSnackbar("Thêm tài khoản thành công!", { variant: "success", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <Box className={cls.root}>
        <Paper className={cls.head}>
          <Typography variant="h3" style={{ fontWeight: "400" }}>
            Thêm tài khoản
          </Typography>
        </Paper>
        <Paper className={cls.body}>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item xs={12} md={4}>
              <TextField
                label="Public key"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formState.publicKey}
                onChange={(e) => setFormState({ ...formState, publicKey: e.target.value })}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Private key (optional)"
                InputLabelProps={{ shrink: true }}
                InputProps={{ type: "password" }}
                fullWidth
                value={formState.privateKey}
                onChange={(e) => setFormState({ ...formState, privateKey: e.target.value })}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextField
                label="Ghi chú"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={formState.note}
                onChange={(e) => setFormState({ ...formState, note: e.target.value })}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button variant="contained" color="primary" onClick={hdAddAccount}>
                Thêm tài khoản
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
