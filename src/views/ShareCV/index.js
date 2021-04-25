import View from "../../shared/View";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { ERR_TOP_CENTER } from "../../utils/snackbar-utils";
import ShareCVButtonBar from "./ShareCVButtonBar";
import EncryptedAccountProfile from "./EncryptedAccountProfile";
import { Box, Paper, useTheme } from "@material-ui/core";
import { setFetchedAccounts } from "../AccountManagement/redux";

export default function ShareCV(props) {
  const [fetching, setFetching] = useState(true);
  const [accountProfiles, setAccountProfiles] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  function updateAccountProfile(accountProfile, index) {
    const cloneAccProfiles = [...accountProfiles];
    cloneAccProfiles[index] = accountProfile;
    setFetchedAccounts(cloneAccProfiles);
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
              accountProfile.isDecrypted ? (
                <div>decrypted data</div>
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
