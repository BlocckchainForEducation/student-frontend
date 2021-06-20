import { Box, Checkbox, FormControlLabel, Paper, Typography } from "@material-ui/core";
import { CertTable } from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedCertInfo";
import DecryptedSubjectTable from "./DecryptedSubjectTable";

export default function DecryptedEduPrograms({ accountIndex, eduPrograms, hdToggleShareEduProgram }) {
  return (
    <div>
      {eduPrograms.map((eduProgram, eduProgramIndex) => {
        const versions = eduProgram?.certificate?.versions;
        return (
          <div key={eduProgramIndex}>
            <Paper style={{ padding: "8px 16px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(eduProgram.share)}
                    onChange={() => hdToggleShareEduProgram(accountIndex, eduProgramIndex)}
                  ></Checkbox>
                }
                label={<Typography variant="h5">Mã CTĐT: {eduProgram.subjects[0].versions[0].portfolio_id}</Typography>}
              ></FormControlLabel>
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
