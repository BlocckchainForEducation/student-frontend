import { Box, Checkbox, FormControlLabel, Paper, Typography } from "@material-ui/core";
import { EDU_PROGRAM_ID } from "../../../constance";
import { CertTable } from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedCertInfo";
import DecryptedPrimaryCert from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedPrimaryCert";
import DecryptedPrimarySubjectTable from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedPrimarySubjectTable";
import DecryptedSecondaryCert from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedSecondaryCert";
import DecryptedSecondarySubjectTable from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedSecondarySubjectTable";
import DecryptedCertInfo from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedCertInfo";
import DecryptedSubjectTable from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedSubjectTable";

export default function DecryptedEduPrograms({ accountIndex, eduPrograms, hdToggleShareEduProgram }) {
  return (
    <div>
      {eduPrograms.map((eduProgram, eduProgramIndex) => {
        const eduProgramId = eduProgram.subjects[0].versions[0].portfolio_id;
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
              {/* <Paper style={{ padding: "16px", paddingTop: 0 }}>
                {versions && <CertTable cert={versions[versions.length - 1]} titleVariant="h5" />}
              </Paper> */}

              {/* <Box mb={1}></Box> */}

              {eduProgramId !== EDU_PROGRAM_ID.PRIMARY && eduProgramId !== EDU_PROGRAM_ID.SECONDARY && (
                <Box>
                  <DecryptedCertInfo versions={eduProgram.certificate.versions}></DecryptedCertInfo>
                  <Box pt={2}></Box>
                  <DecryptedSubjectTable subjects={eduProgram.subjects}></DecryptedSubjectTable>
                </Box>
              )}
              {eduProgramId === EDU_PROGRAM_ID.PRIMARY && (
                <Box>
                  <DecryptedPrimaryCert versions={eduProgram.certificate.versions}></DecryptedPrimaryCert>
                  <Box pt={2}></Box>
                  <DecryptedPrimarySubjectTable subjects={eduProgram.subjects}></DecryptedPrimarySubjectTable>
                </Box>
              )}
              {eduProgramId === EDU_PROGRAM_ID.SECONDARY && (
                <Box>
                  <DecryptedSecondaryCert versions={eduProgram.certificate.versions}></DecryptedSecondaryCert>
                  <Box pt={2}></Box>
                  <DecryptedSecondarySubjectTable subjects={eduProgram.subjects}></DecryptedSecondarySubjectTable>
                </Box>
              )}
            </Box>
          </div>
        );
      })}
    </div>
  );
}
