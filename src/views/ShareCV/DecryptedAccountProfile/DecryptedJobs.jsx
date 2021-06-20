import { Box, Divider, FormControlLabel, Grid, Paper, Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

import { getLinkFromTxid } from "../../../utils/utils";
import { SimpleTable } from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedCertInfo";

export default function DecryptedJobs({ accountIndex, jobs, hdToggleShareJob }) {
  return (
    <div>
      {jobs.map((job, jobIndex) => {
        const [part1, part2] = separateJob(job);
        return (
          <Box mb={2} key={jobIndex}>
            <Paper style={{ padding: "8px 16px" }}>
              <FormControlLabel
                control={<Checkbox checked={Boolean(job.share)} onChange={() => hdToggleShareJob(accountIndex, jobIndex)}></Checkbox>}
                label={<Typography variant="h5">Mã công việc: {job.jobId}</Typography>}
              ></FormControlLabel>
            </Paper>

            <Box mb={1}></Box>

            <Box pl={2}>
              <Paper style={{ padding: "16px", paddingTop: 0 }}>
                <Box pt={2} pb={1} alignItems="center">
                  <Typography variant="h5">Thông tin công việc: </Typography>
                </Box>
                <Divider></Divider>
                <Grid container>
                  <Grid item sm={12} md={6}>
                    <SimpleTable rows={part1}></SimpleTable>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <SimpleTable rows={part2}></SimpleTable>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Box>
        );
      })}
    </div>
  );
}

function separateJob(job) {
  const part1 = {
    "Tên Công ty": job.start.plain.companyName,
    "Địa chỉ": job.start.plain.companyAddress,
    // "Khóa công khai": job.companyPublicKeyHex,
    "Tên nhân viên": job.start.plain.candidateName,
    "Ngày sinh": job.start.plain.candidateBirthday,
  };

  const part2 = {
    "Vị trí công việc": job.start.plain.jobTitle,
    "Thời gian": job.start.plain.shift,
    "Bắt đầu từ": job.start.timestamp,
    "Tình trạng": job.end ? `Kết thúc từ ${job.end.timestamp}` : "Đang làm việc",
    Txid: getLinkFromTxid(job.start.txid),
  };

  return [part1, part2];
}
