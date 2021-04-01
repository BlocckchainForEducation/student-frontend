import { Box, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import View from "../../shared/View";
import SelectionBar from "./SelectionBar";
import ShowEduProgramsInfo from "./ShowEduProgramsInfo";

const useStyels = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function ShareCertificate(props) {
  const cls = useStyels();
  const currentSelectedAccount = useSelector((state) => state.shareCertificateSlice.currentSelectedAccount);
  const eduPrograms = useSelector((state) => state.shareCertificateSlice.eduPrograms);

  return (
    <View title="Chia sẻ bằng cấp">
      <Box className={cls.root}>
        <SelectionBar></SelectionBar>

        {currentSelectedAccount && eduPrograms.length === 0 && (
          <Box p={2} bgcolor="white">
            <Typography>Không tìm thấy chương trình đào tạo nào!</Typography>
          </Box>
        )}

        {currentSelectedAccount && eduPrograms.length !== 0 && (
          <Box p={2} bgcolor="white">
            <ShowEduProgramsInfo eduPrograms={eduPrograms}></ShowEduProgramsInfo>
          </Box>
        )}
      </Box>
    </View>
  );
}
