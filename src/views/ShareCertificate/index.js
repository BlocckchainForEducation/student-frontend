import { Box, makeStyles } from "@material-ui/core";
import View from "../../shared/View";
import DecryptedCertInfo from "./DecryptedCertInfo";
import DecryptedSubjectTable from "./DecryptedSubjectTable";
import EncryptedCertInfo from "./EncryptedCertInfo";
import EncryptedSubjectTable from "./EncryptedSubjectTable";
import FunctionButton from "./FunctionButton";
import SelectionBar from "./SelectionBar";
import SelectBar from "./SelectionBar";

const useStyels = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function ShareCertificate(props) {
  const cls = useStyels();
  return (
    <View title="Chia sẻ bằng cấp">
      <Box className={cls.root}>
        <SelectionBar></SelectionBar>
        {/* <FunctionButton></FunctionButton> */}
        {/* <EncryptedCertInfo></EncryptedCertInfo> */}
        {/* <EncryptedSubjectTable></EncryptedSubjectTable> */}
        <DecryptedCertInfo></DecryptedCertInfo>
        <DecryptedSubjectTable></DecryptedSubjectTable>
      </Box>
    </View>
  );
}
