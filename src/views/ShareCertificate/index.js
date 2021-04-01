import { Box, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import View from "../../shared/View";
import SelectionAccountBar from "./SelectionAccountBar";
import SelectEduProgramBar from "./SelectEduProgramBar";
import ShowEncryptedInfo from "./ShowEncryptedInfo";

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
            <Box p={2} bgcolor="white">
              <SelectEduProgramBar></SelectEduProgramBar>
            </Box>
            {show === "encrypt" && <ShowEncryptedInfo />}
          </>
        )}
      </Box>
    </View>
  );
}
