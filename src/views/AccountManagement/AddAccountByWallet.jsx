import { Box, Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    width: "95%",
    margin: "auto",
    position: "relative",
    padding: theme.spacing(2.5, 2),
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  body: { width: "100%", marginTop: "-32px", padding: theme.spacing(6, 3, 3, 3) },
}));
export default function AddAccountByWallet(props) {
  const cls = useStyles();

  return (
    <div>
      <Box className={cls.root}>
        <Paper className={cls.head}>
          <Typography variant="h3" style={{ fontWeight: "400" }}>
            Thêm tài khoản bằng ví
          </Typography>
        </Paper>
        <Paper className={cls.body}>
          <Typography variant="h4" gutterBottom>
            Bạn có thể cài đặt và sử dụng B4E Wallet để quản lý khóa và thêm tài khoản.
          </Typography>
          <Box textAlign="right" pr={2}>
            <Button variant="contained" color="primary">
              Thêm tài khoản
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
