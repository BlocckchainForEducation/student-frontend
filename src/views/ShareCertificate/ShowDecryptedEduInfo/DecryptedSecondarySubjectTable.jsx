import { useSelector } from "react-redux";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { getLinkFromTxid } from "../../../utils/utils";

export default function DecryptedSecondarySubjectTable({ subjects }) {
  const subjectsFromRedux = useSelector((state) => state.shareCertificateSlice.decryptedEduProgram?.subjects);
  const grades = subjects || subjectsFromRedux;
  return (
    <div>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Khối</TableCell>
                <TableCell>Lớp</TableCell>
                <TableCell>Giáo viên cho điểm</TableCell>
                <TableCell>Tên môn học</TableCell>
                <TableCell>Điểm số</TableCell>
                <TableCell>Txid</TableCell>

                {/* <TableCell></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {grades.map((grade) =>
                grade.versions.map((version) => (
                  <TableRow>
                    <TableCell>{version.plain.classGroup}</TableCell>
                    <TableCell>{version.plain.nameOfClass}</TableCell>
                    <TableCell>{version.plain.subjectTeacherName}</TableCell>
                    <TableCell>{version.plain.subjectName}</TableCell>
                    <TableCell>{version.plain.grade}</TableCell>
                    <TableCell>{getLinkFromTxid(version.txid, 10)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
