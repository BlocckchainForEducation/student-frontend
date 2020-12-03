import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 2),
  },
  selectBox: {
    flexGrow: 1,
    padding: theme.spacing(0, 2),
  },
  noShrink: {
    flexShrink: 0,
  },
}));

export default function SelectionBar(props) {
  const cls = useStyles();
  const accounts = useSelector((state) => state.sawtoothAccountsSlice.accounts);
  return (
    <Paper className={cls.root}>
      <div className={cls.noShrink}>
        <Typography variant="button">Chon tai khoan</Typography>
      </div>
      <div className={cls.selectBox}>
        <Autocomplete
          options={accounts}
          getOptionLabel={(account) => account.publicKey}
          renderInput={(params) => <TextField {...params} label="Chon tai khoan" variant="outlined" />}
        ></Autocomplete>
      </div>
      <div className={cls.noShrink}>
        <Button variant="contained" color="primary">
          Lay du lieu
        </Button>
      </div>
    </Paper>
  );
}
