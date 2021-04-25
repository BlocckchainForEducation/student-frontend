import { Box, Button, Typography, useTheme } from "@material-ui/core";
import axios from "axios";
import { useSnackbar } from "notistack";
import { requirePrivateKeyHex } from "../../../utils/keyholder";
import { ERR_TOP_CENTER } from "../../../utils/snackbar-utils";

export default function AccountTitleBar({ accountProfile, index, updateAccountProfile }) {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  async function hdDecryptAccountProfile() {
    let privateKeyHex = accountProfile.account.privateKey;
    if (!privateKeyHex) {
      privateKeyHex = await requirePrivateKeyHex(enqueueSnackbar);
    }
    try {
      const response = await axios.post("/student/decrypt-account-profile", { privateKeyHex, encryptedAccountProfile: accountProfile });
      const decryptedAccountProfile = { ...response.data, decrypted: true };
      updateAccountProfile(decryptedAccountProfile, index);
    } catch (error) {
      error.response && enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
    }
  }

  return (
    <Box p={1} display="flex" alignItems="center" justifyContent="space-between" style={{ borderBottom: "1px solid grey" }}>
      <Typography variant="h5" style={{ flexGrow: "1" }}>{`Tài khoản: ${accountProfile.account.publicKeyHex}`}</Typography>
      <Button variant="contained" color="primary" style={{ flexShrink: 0 }} onClick={hdDecryptAccountProfile}>
        Mở khóa
      </Button>
    </Box>
  );
}
