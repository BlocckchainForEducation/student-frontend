import View from "../../shared/View";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { ERR_TOP_CENTER } from "../../utils/snackbar-utils";
import ShareCVButtonBar from "./ShareCVButtonBar";
import EncryptedAccountProfile from "./EncryptedAccountProfile";
import { Box, Paper, useTheme } from "@material-ui/core";

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
        enqueueSnackbar(JSON.stringify(error.response.data), ERR_TOP_CENTER);
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
              accountProfile.isDecrypted ? <div></div> : <EncryptedAccountProfile accountProfile={accountProfile} />
            )}
          </Box>
        </div>
      )}
    </View>
  );
}
