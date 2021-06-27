import { TableBody } from "@material-ui/core";
import { Table, TableContainer, TableHead, TableRow, TableCell, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getLinkFromTxid } from "../../../utils/utils";

export default function DecryptedPrimarySubjectTable({ props }) {
  const grades = useSelector((state) => state.shareCertificateSlice.decryptedEduProgram.subjects);
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lớp</TableCell>
              <TableCell>GVCN</TableCell>
              <TableCell>Toán</TableCell>
              <TableCell>Tiếng Việt</TableCell>
              <TableCell>Ngoại ngữ</TableCell>
              <TableCell>TN&amp;XH</TableCell>
              <TableCell>LS&amp;ĐL</TableCell>
              <TableCell>Khoa học</TableCell>
              <TableCell>TH&amp;CN</TableCell>
              <TableCell>Thể dục</TableCell>
              <TableCell>Nghệ thuật</TableCell>
              <TableCell>Txid</TableCell>
              {/* <TableCell></TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {grades.map((grade) =>
              grade.versions.map((version) => (
                <TableRow>
                  <TableCell>{version.plain.nameOfClass || version.plain.classGroup}</TableCell>
                  <TableCell>{version.plain.teacherName}</TableCell>
                  <TableCell align="center">{version.plain.math}</TableCell>
                  <TableCell align="center">{version.plain.literacy}</TableCell>
                  <TableCell align="center">{version.plain.language}</TableCell>
                  <TableCell align="center">{version.plain.naturalNsocial}</TableCell>
                  <TableCell align="center">{version.plain.historyNgeography}</TableCell>
                  <TableCell align="center">{version.plain.science}</TableCell>
                  <TableCell align="center">{version.plain.itNtech}</TableCell>
                  <TableCell align="center">{version.plain.healthEdu}</TableCell>
                  <TableCell align="center">{version.plain.art}</TableCell>
                  <TableCell align="center">{getLinkFromTxid(version.txid, 10)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
