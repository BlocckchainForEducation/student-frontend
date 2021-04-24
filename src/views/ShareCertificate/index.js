import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import View from "../../shared/View";
import SelectionAccountBar from "./SelectionAccountBar";
import SelectEduProgramBar from "./SelectEduProgramBar";
import ShowEncryptedInfo from "./ShowEncryptedInfo";
import ShowDecryptInfo from "./ShowDecryptedEduInfo";

const useStyels = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function ShareCertificate(props) {
  const cls = useStyels();
  const selectedAccount = useSelector((state) => state.shareCertificateSlice.selectedAccount);
  const eduPrograms = useSelector((state) => state.shareCertificateSlice.eduPrograms);
  const show = useSelector((state) => state.shareCertificateSlice.show);

  return (
    <View title="Chia sẻ bằng cấp">
      <Box className={cls.root}>
        <SelectionAccountBar></SelectionAccountBar>

        {selectedAccount && eduPrograms.length === 0 && (
          <Box p={2} bgcolor="white">
            <Typography>Không tìm thấy chương trình đào tạo nào!</Typography>
          </Box>
        )}

        {selectedAccount && eduPrograms.length !== 0 && (
          <>
            <Paper style={{ padding: "16px" }}>
              <SelectEduProgramBar></SelectEduProgramBar>
            </Paper>

            {show === "encrypt" && <ShowEncryptedInfo />}
            {show === "decrypt" && <ShowDecryptInfo />}
          </>
        )}
      </Box>
    </View>
  );
}
