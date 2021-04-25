import { Box, Paper, Typography } from "@material-ui/core";

export default function EduPrograms({ eduPrograms }) {
  return eduPrograms.map((eduPro, index) => (
    <Paper style={{ padding: "8px" }} key={index}>
      <Typography gutterBottom variant="h5">
        Mã CTĐT: {eduPro.eduProgram.eduProgramId}
      </Typography>
      <hr />

      <Box mt={1}></Box>
      <Typography variant="h5">Bằng cấp</Typography>
      <Box mt={1} mb={2} style={{ wordWrap: "break-word" }}>
        {eduPro.certificate.versions[0].cipher}
      </Box>

      <Typography variant="h5">Bảng điểm</Typography>
      <Box mt={1}></Box>
      {eduPro.subjects.map((subject, index) => (
        <Box mb={2} key={index}>
          {subject.versions.map((version, vindex) => (
            <Box key={vindex} style={{ wordWrap: "break-word" }}>
              {version.cipher}
            </Box>
          ))}
        </Box>
      ))}
    </Paper>
  ));
}
