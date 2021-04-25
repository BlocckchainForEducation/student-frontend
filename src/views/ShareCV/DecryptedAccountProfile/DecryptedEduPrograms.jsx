import { Box, Paper, Typography } from "@material-ui/core";
import { CertTable } from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedCertInfo";
import DecryptedSubjectTable from "./DecryptedSubjectTable";

export default function DecryptedEduPrograms({ eduPrograms }) {
  return (
    <div>
      {eduPrograms.map((eduProgram, index) => {
        const versions = eduProgram?.certificate?.versions;
        return (
          <div>
            <Paper style={{ padding: "16px" }}>
              <Typography variant="h5">Mã CTĐT: {eduProgram.eduProgram.eduProgramId}</Typography>
              {/* <hr /> */}
            </Paper>

            <Box mb={1}></Box>

            <Box pl={2}>
              <Paper style={{ padding: "16px", paddingTop: 0 }}>
                {versions && <CertTable cert={versions[versions.length - 1]} titleVariant="h5" />}
              </Paper>

              <Box mb={1}></Box>

              <DecryptedSubjectTable subjects={eduProgram.subjects} />
            </Box>
          </div>
        );
      })}
    </div>
  );
}
