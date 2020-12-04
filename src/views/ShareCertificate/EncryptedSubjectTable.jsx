import { Box, Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function EncryptedSubjectTable(props) {
  const cls = useStyles();
  const encryptedSubjectPointList = useSelector((state) => state.shareCertificateSlice.encryptedDataOfAccount.subjectPointList);
  return (
    <div>
      <Paper className={cls.root}>
        <Box mb={1}>
          <Typography variant="h4">Thông tin bảng điểm (dạng mã hóa)</Typography>
        </Box>
        <Divider></Divider>
        <Box mt={2}>
          {encryptedSubjectPointList.map((subject, index) => (
            <Box key={index}>{subject}</Box>
          ))}
        </Box>
      </Paper>
    </div>
  );
}
