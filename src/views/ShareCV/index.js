import { Box } from "@material-ui/core";
import axios from "axios";
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

  function updateAccountProfile(accountProfile, index) {
    const cloneAccProfiles = [...accountProfiles];
    cloneAccProfiles[index] = accountProfile;
    setAccountProfiles(cloneAccProfiles);
  }

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

  return (
    <View>
      {fetching ? null : (
        <div>
          <ShareCVButtonBar></ShareCVButtonBar>
          <Box mt={2}>
            {accountProfiles.map((accountProfile, index) =>
              accountProfile.decrypted ? (
                <DecryptedAccountProfile {...{ updateAccountProfile, index, accountProfile }}></DecryptedAccountProfile>
              ) : (
                <EncryptedAccountProfile {...{ updateAccountProfile, index, accountProfile }} />
              )
            )}
          </Box>
        </div>
      )}
    </View>
  );
}
