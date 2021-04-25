import { Box, Paper, Typography } from "@material-ui/core";

export default function EduPrograms({ eduPrograms }) {
  return eduPrograms.map((eduPro, index) => (
    <Paper style={{ padding: "8px" }}>
      <Typography gutterBottom>Mã CTĐT: {eduPro.eduProgram.eduProgramId}</Typography>
      <hr />

      <Typography>Bằng cấp</Typography>
      <Box>{eduPro.certificate.versions[0].cipher}</Box>

      <Box mb={2}></Box>

      <Typography>Bảng điểm</Typography>
      {eduPro.subjects.map((subject, index) => (
        <Box key={index} mb={1}>
          {subject.versions.map((version, vindex) => (
            <Box key={vindex}>{version.cipher}</Box>
          ))}
        </Box>
      ))}
    </Paper>
  ));
}
