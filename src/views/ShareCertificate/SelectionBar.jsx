import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: theme.spacing(2, 2),
  },
}));

export default function SelectionBar(props) {
  const cls = useStyles();
  const accounts = useSelector((state) => state.sawtoothAccountsSlice.accounts);
  return (
    <Paper className={cls.root}>
      <Autocomplete
        options={accounts}
        getOptionLabel={(account) => account.publicKey}
        renderInput={(params) => <TextField {...params} label="Chọn tài khoản" variant="outlined" />}
      ></Autocomplete>
    </Paper>
  );
}
