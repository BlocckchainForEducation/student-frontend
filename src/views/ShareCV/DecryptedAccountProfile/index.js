import { Box } from "@material-ui/core";
import AccountTitleBar from "../AccountTitleBar";
import DecryptedEduPrograms from "./DecryptedEduPrograms";
import DecryptedJobs from "./DecryptedJobs";

export default function DecryptedAccountProfile({
  updateAccountProfile,
  index,
  accountProfile,
  hdToggleShareJob,
  hdToggleShareEduProgram,
}) {
  return (
    <div style={{ border: "1px solid grey" }}>
      <div style={{ backgroundColor: "white" }}>
        <AccountTitleBar {...{ updateAccountProfile, accountProfile, index }} />
      </div>
      <Box p={2}>
        <DecryptedJobs accountIndex={index} jobs={accountProfile.jobs} hdToggleShareJob={hdToggleShareJob} />
        <Box mb={2}></Box>
        <DecryptedEduPrograms
          accountIndex={index}
          eduPrograms={accountProfile.eduPrograms}
          hdToggleShareEduProgram={hdToggleShareEduProgram}
        />
      </Box>
    </div>
  );
}
