import { Box, Divider, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function DecryptedSubjectTable(props) {
  const cls = useStyles();
  const subjectPointList = useSelector((state) => state.shareCertificateSlice.decryptedDataOfAccount.subjectPointList);

  return (
    <div>
      <Paper className={cls.root}>
        <Typography gutterBottom variant="h4">
          Thông tin bảng điểm
        </Typography>
        <Divider></Divider>
        <TableContainer>
          <Table>
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
              {subjectPointList.map((subject, index) => (
                <TableRow key={index}>
                  <TableCell>{subject.semester}</TableCell>
                  <TableCell>{subject.codename}</TableCell>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>{subject.halfSemesterPoint}</TableCell>
                  <TableCell>{subject.finalSemesterPoint}</TableCell>
                  <TableCell>{subject.rank}</TableCell>
                  <TableCell>{subject.txid}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
