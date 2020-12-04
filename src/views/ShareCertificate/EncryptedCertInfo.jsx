import { Box, Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function EncryptedCertInfo(props) {
  const cls = useStyles();
  const encryptedCertData = useSelector((state) => state.shareCertificateSlice.encryptedDataOfAccount.certificate);
  return (
    <div>
      <Paper className={cls.root}>
        <Box mb={1}>
          <Typography variant="h4">Thông tin bằng cấp (dạng mã hóa)</Typography>
        </Box>
        <Divider></Divider>
        <Box mt={2} style={{ wordWrap: "break-word" }}>
          {encryptedCertData}
        </Box>
      </Paper>
    </div>
  );
}
