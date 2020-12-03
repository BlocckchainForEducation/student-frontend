import { Box, Divider, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

// const certPart1 = {
//   "Họ và tên": "Nguyễn Văn An",
//   "Ngày sinh": "01/01/1998",
//   "Nơi sinh": "Từ Sơn, Bắc Ninh",
//   "Giới tính": "Nam",
//   "Dân tộc": "Kinh",
//   "Học sinh trường": "Trung học cơ sở Hương Mạc I",
//   "Năm tốt nghiệp": "2016",
// };

// const certPart2 = {
//   "Xếp loại tốt nghiệp": "Khá",
//   "Hình thức đào tạo": "Chính quy",
//   "Số hiệu": "A09050634",
//   "Số vào sổ cấp bằng": "185",
//   "Trưởng phòng GD&ĐT": "Nguyễn Văn Bình",
//   Txid: "2443d2798645516f6d985347ba456ce6da416063952565d0a33d0d2009ee7a3f".substr(0, 20),
// };

export default function DecryptedCertInfo(props) {
  const cls = useStyles();
  const certificate = useSelector((state) => state.shareCertificateSlice.decryptedDataOfAccount.certificate);
  const [certPart1, certPart2] = separateCertificate(certificate);

  return (
    <div>
      <Paper className={cls.root}>
        <Typography gutterBottom variant="h4">
          Thong tin bang cap
        </Typography>
        <Divider></Divider>
        <Grid container>
          <Grid item sm={12} md={6}>
            <SimpleTable rows={certPart1}></SimpleTable>
          </Grid>
          <Grid item sm={12} md={6}>
            <SimpleTable rows={certPart2}></SimpleTable>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function SimpleTable({ rows }) {
  return (
    <TableContainer>
      <Table size="small">
        <TableBody>
          {Object.entries(rows).map((entry) => (
            <TableRow>
              <TableCell style={{ width: "50%" }}>{entry[0]}</TableCell>
              <TableCell>{entry[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function separateCertificate(cert) {
  let certPart1 = {
    "Họ và tên": cert.name,
    "Ngày sinh": cert.birthday,
    "Giới tính": cert.gender,
    Trường: cert.university,
    "Ngành học": cert.faculty,
    "Loại bằng": cert.degree,
    "Năm tốt nghiệp": cert.gradyear,
  };
  let certPart2 = {
    "Xếp loại": cert.level,
    "Hình thức đào tạo": cert.eduform,
    "Nơi cấp": cert.issuelocation,
    "Ngày cấp": cert.issuedate,
    "Hiệu trưởng": cert.headmaster,
    "Số hiệu": cert.regisno,
    "Số hiệu vào sổ": cert.globalregisno,
  };
  return [certPart1, certPart2];
}
