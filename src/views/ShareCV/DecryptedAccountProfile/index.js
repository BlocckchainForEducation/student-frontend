import { Box } from "@material-ui/core";
import AccountTitleBar from "../AccountTitleBar";
import DecryptedEduPrograms from "./DecryptedEduPrograms";
import DecryptedJobs from "./DecryptedJobs";

export default function DecryptedAccountProfile({ updateAccountProfile, index, accountProfile }) {
  return (
    <div style={{ border: "1px solid grey" }}>
      <div style={{ backgroundColor: "white" }}>
        <AccountTitleBar {...{ updateAccountProfile, accountProfile, index }} />
      </div>
      <Box p={2}>
        <DecryptedJobs jobs={accountProfile.jobs} />
        <Box mb={2}></Box>
        <DecryptedEduPrograms eduPrograms={accountProfile.eduPrograms} />
      </Box>
    </div>
  );
}
