import { Box, Table, TableContainer, TableHead, TableRow, Typography, TableCell, TableBody, Grid } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getLinkFromTxid } from "../../../utils/utils";

export default function DecryptedSecondaryCert(props) {
  const shareCertVersions = useSelector((state) => state.shareCertificateSlice.decryptedEduProgram?.certificate?.versions);
  const versions = props.versions || shareCertVersions;
  return (
    <div>
      <Paper>
        {!versions && (
          <>
            <Box p={2}>
              <Typography variant="h4" gutterBottom>
                Thông tin bằng cấp
              </Typography>
              <Divider></Divider>
              <Typography style={{ paddingTop: "8px" }}>Chưa có bằng cấp!</Typography>
            </Box>
          </>
        )}
        {versions && versions[0] && (
          <Grid container>
            <Grid item md={6}>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Trường</TableCell>
                      <TableCell>{versions[0].plain.university}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Chương trình đào tạo</TableCell>
                      <TableCell>{versions[0].plain.eduProgramName}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Học sinh</TableCell>
                      <TableCell>{versions[0].plain.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ngày sinh</TableCell>
                      <TableCell>{versions[0].plain.birthday}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item md={6}>
              <TableContainer>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Giới tính</TableCell>
                      <TableCell>{versions[0].plain.gender}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ngày công nhận hoàn thành</TableCell>
                      <TableCell>{versions[0].plain.issusedate}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Txid</TableCell>
                      <TableCell>{getLinkFromTxid(versions[0].txid)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )}
      </Paper>
    </div>
  );
}
