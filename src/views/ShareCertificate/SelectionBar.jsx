import { makeStyles, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { resetState, updateEncryptedState } from "./redux";

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
      dp(resetState());
    } else {
      const publicKeyHex = selectedAccount.publicKeyHex;
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/encrypted-data?publicKeyHex=${publicKeyHex}`, {
        headers: { "Content-Type": "application/json", Authorization: getToken() },
      });

      const result = await response.json();
      if (!response.ok) {
        console.log(result);
      } else {
        // result: {publicKeyHex, certificate: {address, versions: [{txid, timestamp, active, cipher}] }, subjects: [{address, versions: [{txid, timestamp, active, cipher}, {}...] } ]}
        dp(updateEncryptedState({ currentSelectedAccount: selectedAccount, encryptedDataOfAccount: result }));
      }
    }
  }

  return (
    <Paper className={cls.root}>
      <Autocomplete
        size="small"
        renderInput={(params) => <TextField {...params} label="Chọn tài khoản" variant="outlined" />}
        options={accounts}
        getOptionLabel={(account) => `${account.publicKeyHex.slice(0, 30) + "..." + account.publicKeyHex.slice(-30)} - ${account.note}`}
        value={currentSelectedAccount}
        getOptionSelected={(option, value) => option.publicKeyHex === value.publicKeyHex}
        onChange={hdChangeSelection}
      ></Autocomplete>
    </Paper>
  );
}
