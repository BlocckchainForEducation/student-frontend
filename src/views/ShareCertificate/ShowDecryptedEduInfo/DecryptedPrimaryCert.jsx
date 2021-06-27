import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getLinkFromTxid } from "../../../utils/utils";

export default function DecryptedPrimaryCert({ props }) {
  const cert = useSelector((state) => state.shareCertificateSlice.decryptedEduProgram.certificate);

  return (
    <div>
      {cert && (
        <Paper>
          <Typography>Đã được công nhận hoàn thành chương trình tiểu học!</Typography>
          <Typography>Txid: {getLinkFromTxid()}</Typography>
        </Paper>
      )}
    </div>
  );
}
