import { Box } from "@material-ui/core";
import axios from "axios";
import FileSaver from "file-saver";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import View from "../../shared/View";
import { ERR_TOP_CENTER } from "../../utils/snackbar-utils";
import DecryptedAccountProfile from "./DecryptedAccountProfile";
import EncryptedAccountProfile from "./EncryptedAccountProfile";
import ShareCVButtonBar from "./ShareCVButtonBar";

export default function ShareCV(props) {
  const [fetching, setFetching] = useState(true);
  const [accountProfiles, setAccountProfiles] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function fetchAccountProfiles() {
      try {
        const response = await axios.get("/student/account-profiles");
        setAccountProfiles(response.data);
        setFetching(false);
      } catch (error) {
        error.response && enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
      }
    }
    fetchAccountProfiles();
  }, []);

  function updateAccountProfile(accountProfile, index) {
    const cloneAccProfiles = [...accountProfiles];
    cloneAccProfiles[index] = accountProfile;
    setAccountProfiles(cloneAccProfiles);
  }

  function hdToggleShareJob(accountIndex, jobIndex) {
    const cloneAccProfiles = [...accountProfiles];
    cloneAccProfiles[accountIndex].jobs[jobIndex].share = !cloneAccProfiles[accountIndex].jobs[jobIndex].share;
    setAccountProfiles(cloneAccProfiles);
  }

  function hdToggleShareEduProgram(accountIndex, eduProgramIndex) {
    const cloneAccProfiles = [...accountProfiles];
    cloneAccProfiles[accountIndex].eduPrograms[eduProgramIndex].share = !cloneAccProfiles[accountIndex].eduPrograms[eduProgramIndex].share;
    setAccountProfiles(cloneAccProfiles);
  }

  function hdClickShareCV() {
    const cv = accountProfiles.map((accountProfile) => {
      const shareJobs = accountProfile.jobs.filter((job) => job.share === true);
      const shareEduPrograms = accountProfile.eduPrograms.filter((eduProgram) => eduProgram.share === true);
      return { account: { publicKeyHex: accountProfile.account.publicKeyHex }, jobs: shareJobs, eduPrograms: shareEduPrograms };
    });
    // console.log(cv);
    const cvFiltered = cv.filter((accProfile) => accProfile.jobs.length !== 0 || accProfile.eduPrograms.length !== 0);
    console.log(cvFiltered.length);
    if (cvFiltered.length === 0) {
      alert("Hãy giải mã và chọn thông tin bạn muốn chia sẻ!");
    } else {
      const content = JSON.stringify(cvFiltered);
      var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      FileSaver.saveAs(blob, "Share-CV.b4e");
    }
  }

  return (
    <View>
      {fetching ? null : (
        <div>
          <ShareCVButtonBar hdClickShareCV={hdClickShareCV}></ShareCVButtonBar>
          <Box mt={2}>
            {accountProfiles.map((accountProfile, index) => (
              <div key={index}>
                {accountProfile.decrypted ? (
                  <DecryptedAccountProfile
                    {...{ updateAccountProfile, index, accountProfile, hdToggleShareJob, hdToggleShareEduProgram }}
                  ></DecryptedAccountProfile>
                ) : (
                  <EncryptedAccountProfile {...{ updateAccountProfile, index, accountProfile }} />
                )}
              </div>
            ))}
          </Box>
        </div>
      )}
    </View>
  );
}
