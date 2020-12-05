import { Box, Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function EncryptedCertInfo(props) {
  const cls = useStyles();
  const cipher = useSelector((state) => {
    const versions = state.shareCertificateSlice.encryptedDataOfAccount.certificate.versions;
    if (versions === null) {
      return "Chưa có bằng cấp!";
    }
    versions.sort((a, b) => b.timestamp - a.timestamp);
    return versions[0].cipher;
  });
  return (
    <div>
      <Paper className={cls.root}>
        <Box mb={1}>
          <Typography variant="h4">Thông tin bằng cấp (dạng mã hóa)</Typography>
        </Box>
        <Divider></Divider>
        <Box mt={2} style={{ wordWrap: "break-word" }}>
          {cipher}
        </Box>
      </Paper>
    </div>
  );
}
