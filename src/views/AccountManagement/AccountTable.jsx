import { Box, Divider, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { getToken } from "../../utils/mng-token";
import { deleteSawtoothAccount } from "./redux";
import { useSnackbar } from "notistack";

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
  const dp = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  async function hdDelete(publicKey) {
    let response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/sawtooth-accounts`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: getToken() },
      body: JSON.stringify({ publicKey }),
    });
    const result = response.json();
    if (!response.ok) {
      enqueueSnackbar("Something went wrong: " + JSON.stringify(result), { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" } });
    } else {
      dp(deleteSawtoothAccount({ publicKey }));
      enqueueSnackbar("Xóa tài khoản thành công!", { variant: "success", anchorOrigin: { vertical: "bottom", horizontal: "center" } });
    }
  }

  return (
    <Paper>
      <Typography variant="h3" className={cls.head}>
        Danh sách các tài khoản
      </Typography>
      <Divider></Divider>
      <Box pt={1}>
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Public key</TableCell>
                <TableCell>Private key</TableCell>
                <TableCell>Ghi chú</TableCell>
                <TableCell align="center">Xóa</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sawtoothAccounts.map((acc, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{acc.publicKey}</TableCell>
                  <TableCell>{acc.privateKey ? "*".repeat(acc.privateKey.length) : "Không lưu"}</TableCell>
                  <TableCell>{acc.note}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={(e) => hdDelete(acc.publicKey)}>
                      <DeleteIcon></DeleteIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
}
