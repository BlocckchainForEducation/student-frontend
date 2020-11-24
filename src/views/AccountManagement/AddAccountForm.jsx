import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";

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
            <Grid item xs={12} md={5}>
              <TextField label="Public key" InputLabelProps={{ shrink: true }} fullWidth></TextField>
            </Grid>
            {/* <Grid item xs={12} md={2}>
              <FormControlLabel label="Lưu private key" control={<Checkbox />}></FormControlLabel>
            </Grid> */}
            <Grid item xs={12} md={5}>
              <TextField label="Private key" InputLabelProps={{ shrink: true }} fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button variant="contained" color="primary">
                Thêm tài khoản
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
