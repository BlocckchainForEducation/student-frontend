import { makeStyles, Paper } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { ERR_TOP_CENTER } from "../../utils/snackbar-utils";
import { resetState, updateEncryptedState, setSelectedAccountAndData } from "./redux";

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
  const { enqueueSnackbar } = useSnackbar();

  async function hdChangeSelection(e, selectedAccount) {
    if (selectedAccount === null) {
      dp(resetState());
    } else {
      try {
        const response = await axios.get(`/student/data/${selectedAccount.publicKeyHex}`);
        dp(setSelectedAccountAndData({ currentSelectedAccount: selectedAccount, data: response.data }));
      } catch (error) {
        console.error(error);
        // enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
      }
    }
  }

  return (
    <Paper className={cls.root}>
      <Autocomplete
        size="small"
        renderInput={(params) => <TextField {...params} label="Chọn tài khoản" variant="outlined" />}
        options={accounts}
        getOptionLabel={(account) => `${account.publicKeyHex.slice(0, 15) + "..." + account.publicKeyHex.slice(-15)} - ${account.note}`}
        value={currentSelectedAccount}
        getOptionSelected={(option, value) => option.publicKeyHex === value.publicKeyHex}
        onChange={hdChangeSelection}
      ></Autocomplete>
    </Paper>
  );
}
