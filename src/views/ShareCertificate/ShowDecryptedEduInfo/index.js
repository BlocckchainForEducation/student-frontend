import { Box, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { EDU_PROGRAM_ID } from "../../../constance";
import BarForShareButton from "./BarForShareButton";
import DecryptedCertInfo from "./DecryptedCertInfo";
import DecryptedPrimaryCert from "./DecryptedPrimaryCert";
import DecryptedPrimarySubjectTable from "./DecryptedPrimarySubjectTable";
import DecryptedSecondaryCert from "./DecryptedSecondaryCert";
import DecryptedSecondarySubjectTable from "./DecryptedSecondarySubjectTable";
import DecryptedSubjectTable from "./DecryptedSubjectTable";

const useStyels = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function ShowDecryptInfo(props) {
  const cls = useStyels();
  const decryptedEduProgram = useSelector((state) => state.shareCertificateSlice.decryptedEduProgram);
  const eduProgramId = decryptedEduProgram.subjects[0].versions[0].portfolio_id;

  return (
    <div className={cls.root}>
      <BarForShareButton></BarForShareButton>
      {/* <DecryptedCertInfo></DecryptedCertInfo> */}
      {/* <DecryptedSubjectTable></DecryptedSubjectTable> */}
      {eduProgramId !== EDU_PROGRAM_ID.PRIMARY && eduProgramId !== EDU_PROGRAM_ID.SECONDARY && (
        <Box>
          <DecryptedCertInfo></DecryptedCertInfo>
          <DecryptedSubjectTable></DecryptedSubjectTable>
        </Box>
      )}
      {eduProgramId === EDU_PROGRAM_ID.PRIMARY && (
        <Box>
          <DecryptedPrimaryCert></DecryptedPrimaryCert>
          <Box pt={2}></Box>
          <DecryptedPrimarySubjectTable></DecryptedPrimarySubjectTable>
        </Box>
      )}
      {eduProgramId === EDU_PROGRAM_ID.SECONDARY && (
        <Box>
          <DecryptedSecondaryCert></DecryptedSecondaryCert>
          <Box pt={2}></Box>
          <DecryptedSecondarySubjectTable></DecryptedSecondarySubjectTable>
        </Box>
      )}
    </div>
  );
}
