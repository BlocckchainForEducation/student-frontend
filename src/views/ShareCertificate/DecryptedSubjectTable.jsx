import { Divider, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function DecryptedSubjectTable(props) {
  const cls = useStyles();
  const subjects = useSelector((state) => state.shareCertificateSlice.decryptedDataOfAccount.subjects);

  return (
    <div>
      <Paper className={cls.root}>
        <Typography gutterBottom variant="h4">
          Thông tin bảng điểm
        </Typography>
        <Divider></Divider>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Kì học</TableCell>
                <TableCell>Mã học phần</TableCell>
                <TableCell>Tên học phần</TableCell>
                <TableCell>Điểm giữa kì</TableCell>
                <TableCell>Điểm cuối kì</TableCell>
                <TableCell>Điểm chữ</TableCell>
                <TableCell>Txid</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subjects.map((subject, index) => (
                <TableRow key={index}>
                  <TableCell>{subject.plain.semester}</TableCell>
                  <TableCell>{subject.plain.codename}</TableCell>
                  <TableCell>{subject.plain.name}</TableCell>
                  <TableCell>{subject.plain.halfSemesterPoint}</TableCell>
                  <TableCell>{subject.plain.finalSemesterPoint}</TableCell>
                  <TableCell>{subject.plain.rank}</TableCell>
                  <TableCell>{subject.plain.txid}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
