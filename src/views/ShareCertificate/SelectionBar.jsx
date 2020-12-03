import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { updateStateOnSelectionChange } from "./redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2),
  },
}));

export default function SelectionBar(props) {
  const cls = useStyles();
  const currentSelectedAccount = useSelector((state) => state.shareCertificateSlice.currentSelectedAccount);

  const accounts = useSelector((state) => state.sawtoothAccountsSlice.accounts);

  const dp = useDispatch();
  async function hdChangeSelection(e, selectedAccount) {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/encrypted-data?publicKey=${selectedAccount.publicKey}`, {
      headers: { "Content-Type": "application/json", Authorization: getToken() },
    });

    const result = await response.json();
    if (!response.ok) {
      console.log(result);
    } else {
      result.currentSelectedAccount = selectedAccount;
      dp(updateStateOnSelectionChange(result));
    }
  }

  return (
    <Paper className={cls.root}>
      <Autocomplete
        options={accounts}
        getOptionLabel={(account) => `${account.publicKey} - ${account.note}`}
        renderInput={(params) => <TextField {...params} label="Chọn tài khoản" variant="outlined" />}
        value={currentSelectedAccount}
        onChange={hdChangeSelection}
      ></Autocomplete>
    </Paper>
  );
}
