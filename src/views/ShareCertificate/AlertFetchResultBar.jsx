import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { updateStateWhenDecryptedData } from "./redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "& .MuiTypography-gutterBottom": {
      marginBottom: 0,
    },
  },
}));

export default function AlertFetchResultBar(props) {
  const cls = useStyles();
  const selectedAccount = useSelector((state) => state.shareCertificateSlice.currentSelectedAccount);
  const encryptData = useSelector((state) => state.shareCertificateSlice.encryptedDataOfAccount);
  const dp = useDispatch();

  async function hdClick() {
    let privateKey = selectedAccount.privateKey;

    // if user do not save the private key for that account
    if (!privateKey) {
      const result = await askPrivateKeyFromWallet();
      if (!result.ok) {
        alert("Bạn cần cung cấp private key để có thể giải mã!");
        return;
      } else {
        privateKey = result.privateKey;
      }
    }

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/decrypt-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: getToken() },
      body: JSON.stringify({ encryptData, privateKey }),
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
    } else {
      dp(updateStateWhenDecryptedData(result));
    }
  }

  async function askPrivateKeyFromWallet() {
    return Promise.resolve({ ok: true, privateKey: "asdf" });
  }

  return (
    <Paper className={cls.root}>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}>
          <Alert severity="success">
            <AlertTitle>Lấy dữ liệu bản mã thành công!</AlertTitle>
          </Alert>
        </Box>
        <Box pl={2} flexShrink={0}>
          <Button variant="contained" color="primary" onClick={hdClick}>
            Giải mã
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
