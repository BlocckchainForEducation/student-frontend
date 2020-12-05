import React from "react";
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
                <React.Fragment key={index}>
                  {subject.versions.map((version, index) => (
                    <TableRow key={index}>
                      <TableCell>{version.plain.semester}</TableCell>
                      <TableCell>{version.plain.codename}</TableCell>
                      <TableCell>{version.plain.name}</TableCell>
                      <TableCell>{version.plain.halfSemesterPoint}</TableCell>
                      <TableCell>{version.plain.finalSemesterPoint}</TableCell>
                      <TableCell>{version.plain.rank}</TableCell>
                      <TableCell>{version.plain.txid}</TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
