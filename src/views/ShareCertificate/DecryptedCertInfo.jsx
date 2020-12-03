import { Box, Divider, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const certPart1 = {
  "Họ và tên": "Nguyễn Văn An",
  "Ngày sinh": "01/01/1998",
  "Nơi sinh": "Từ Sơn, Bắc Ninh",
  "Giới tính": "Nam",
  "Dân tộc": "Kinh",
  "Học sinh trường": "Trung học cơ sở Hương Mạc I",
  "Năm tốt nghiệp": "2016",
};

const certPart2 = {
  "Xếp loại tốt nghiệp": "Khá",
  "Hình thức đào tạo": "Chính quy",
  "Số hiệu": "A09050634",
  "Số vào sổ cấp bằng": "185",
  "Trưởng phòng GD&ĐT": "Nguyễn Văn Bình",
  Txid: "2443d2798645516f6d985347ba456ce6da416063952565d0a33d0d2009ee7a3f".substr(0, 20),
};

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

export default function DecryptedCertInfo(props) {
  const cls = useStyles();

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
