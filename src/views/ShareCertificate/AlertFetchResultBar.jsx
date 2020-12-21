import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";
import { updateDecryptedState } from "./redux";

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
  const { enqueueSnackbar } = useSnackbar();

  async function hdClick() {
    let privateKeyHex = selectedAccount.privateKey;
    if (!privateKeyHex) {
      enqueueSnackbar("Hãy mở ví và chọn tài khoản!", { variant: "info", anchorOrigin: { vertical: "top", horizontal: "center" } });
      const result = await askPrivateKeyFromWallet();
      if (!result.ok) {
        enqueueSnackbar("Bạn cần cung cấp private key để có thể giải mã!", { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" } });
        return;
      } else {
        enqueueSnackbar("Đã nhận được private key từ ví!", { variant: "success", anchorOrigin: { vertical: "top", horizontal: "center" } });
        privateKeyHex = result.privateKeyHex;
      }
    }
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/decrypt-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: getToken() },
      body: JSON.stringify({ encryptData, privateKeyHex }),
    });
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
    } else {
      dp(updateDecryptedState(result));
    }
  }

  async function askPrivateKeyFromWallet() {
    return new Promise((resolve, reject) => {
      window.postMessage({ type: "SIGN_REQUEST" }, window.origin);
      window.addEventListener("message", function (event) {
        if (event.data.type === "SIGN_RESPONSE" && event.origin === window.origin) {
          if (event.data.accept) {
            return resolve({ ok: true, privateKeyHex: event.data.account.privateKey });
          } else {
            return resolve({ ok: false });
          }
        }
      });
    });
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
