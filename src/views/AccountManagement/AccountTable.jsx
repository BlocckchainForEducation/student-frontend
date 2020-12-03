import { Box, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

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

export default function AccountTable(props) {
  const cls = useStyles();
  const sawtoothAccounts = useSelector((state) => state.sawtoothAccountsSlice.accounts);

  return (
    <div>
      <Box className={cls.root}>
        <Paper className={cls.head}>
          <Typography variant="h3" style={{ fontWeight: "400" }}>
            Danh sách các tài khoản
          </Typography>
        </Paper>
        <Paper className={cls.body}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Public key</TableCell>
                  <TableCell>Private key</TableCell>
                  <TableCell>Ghi chú</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sawtoothAccounts.map((acc, index) => (
                  <TableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{acc.publicKey}</TableCell>
                    <TableCell>{acc.privateKey !== "" ? "*".repeat(acc.privateKey.length) : "Không lưu"}</TableCell>
                    <TableCell>{acc.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}
