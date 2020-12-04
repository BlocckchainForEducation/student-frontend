import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { updateStateWhenSelectionChange } from "./redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 2),
  },
}));

export default function SelectionBar(props) {
  const cls = useStyles();
  const accounts = useSelector((state) => state.sawtoothAccountsSlice.accounts);
  const currentSelectedAccount = useSelector((state) => state.shareCertificateSlice.currentSelectedAccount);
  const dp = useDispatch();

  async function hdChangeSelection(e, selectedAccount) {
    if (selectedAccount === null) {
      const defaultState = { currentSelectedAccount: null, encryptedDataOfAccount: { certificate: null, subjectPointList: [] }, show: "none" };
      dp(updateStateWhenSelectionChange(defaultState));
    } else {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/encrypted-data?publicKey=${selectedAccount.publicKey}`, {
        headers: { "Content-Type": "application/json", Authorization: getToken() },
      });

      const result = await response.json();
      if (!response.ok) {
        console.log(result);
      } else {
        result.currentSelectedAccount = selectedAccount;
        result.show = "encrypt";
        dp(updateStateWhenSelectionChange(result));
      }
    }
  }

  return (
    <Paper className={cls.root}>
      <Autocomplete
        size="small"
        options={accounts}
        getOptionLabel={(account) => `${account.publicKey} - ${account.note}`}
        renderInput={(params) => <TextField {...params} label="Chọn tài khoản" variant="outlined" />}
        value={currentSelectedAccount}
        onChange={hdChangeSelection}
      ></Autocomplete>
    </Paper>
  );
}
