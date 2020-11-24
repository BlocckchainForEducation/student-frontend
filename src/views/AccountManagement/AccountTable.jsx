import { Box, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

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
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Aq7DZm5J4jBJNPMCSaEAg2qOY9icCYoigIBOLAN8WPiV</TableCell>
                  <TableCell>Không lưu</TableCell>
                  <TableCell>Tài khoản trường cấp 1 của tôi</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>AnLpO4jxLPGUjNBpJmnOja/FpXdncPS363uMJwYnS0n9</TableCell>
                  <TableCell>
                    {"w92OGcwLCmcTpJ6eRjQquRSA/Os+f9MB74CBSEM/R0c="
                      .split("")
                      .map((c) => "*")
                      .join("")}
                  </TableCell>
                  <TableCell>Tài khoản trường cấp 2 của tôi</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </div>
  );
}
