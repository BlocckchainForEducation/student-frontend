import { Box, Divider, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {},
  head: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
}));

export default function AccountTable(props) {
  const cls = useStyles();
  const sawtoothAccounts = useSelector((state) => state.sawtoothAccountsSlice.accounts);

  return (
    <Paper>
      <Typography variant="h3" className={cls.head}>
        Danh sách các tài khoản
      </Typography>
      <Divider></Divider>
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
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{acc.publicKey}</TableCell>
                <TableCell>{acc.privateKey ? "*".repeat(acc.privateKey.length) : "Không lưu"}</TableCell>
                <TableCell>{acc.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
