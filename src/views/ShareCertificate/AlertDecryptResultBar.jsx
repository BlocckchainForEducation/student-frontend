import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, Paper } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../utils/mng-token";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "& .MuiTypography-gutterBottom": {
      marginBottom: 0,
    },
  },
}));

export default function AlertDecryptResultBar(props) {
  const cls = useStyles();
  const decryptedData = useSelector((state) => state.shareCertificateSlice.decryptedDataOfAccount);
  const [token, setToken] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  async function hdClick() {
    if (!decryptedData.certificate.versions[0].active) {
      enqueueSnackbar("Không thể chia sẻ bằng cấp đã bị thu hồi!", { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" } });
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/gen-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: getToken() },
      body: JSON.stringify(decryptedData),
    });
    const result = await response.json();
    if (!response.ok) {
      enqueueSnackbar("Something went wrong: " + JSON.stringify(result), { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" } });
    } else {
      setToken(result.token);
    }
  }

  return (
    <Paper className={cls.root}>
      <Box display="flex" alignItems="center">
        <Box flexGrow={1}>
          <Alert severity="success">
            <AlertTitle>Giải mã dữ liệu bản mã thành công!</AlertTitle>
          </Alert>
        </Box>
        <Box pl={2} flexShrink={0}>
          <Button variant="contained" color="primary" onClick={hdClick}>
            Chia sẻ
          </Button>
        </Box>
      </Box>
      <TokenDialog token={token} setToken={setToken}></TokenDialog>
    </Paper>
  );
}

function TokenDialog({ token, setToken }) {
  return (
    <Dialog open={Boolean(token)} onClose={(e) => setToken(null)}>
      <DialogTitle>Token</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ wordWrap: "break-word" }}>{token} </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={(e) => {
            navigator.clipboard.writeText(token);
            setToken(null);
          }}
        >
          Copy
        </Button>
      </DialogActions>
    </Dialog>
  );
}
