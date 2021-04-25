import { Box, Divider, Grid, Paper, Typography } from "@material-ui/core";
import { getLinkFromTxid } from "../../../utils/utils";
import { SimpleTable } from "../../ShareCertificate/ShowDecryptedEduInfo/DecryptedCertInfo";

export default function DecryptedJobs({ jobs }) {
  return (
    <div>
      {jobs.map((job, index) => {
        const [part1, part2] = separateJob(job);
        return (
          <div key={index}>
            <Paper style={{ padding: "16px" }}>
              <Typography variant="h5">Mã công việc: {job.jobId}</Typography>
              {/* <hr /> */}
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
          </div>
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
    Txid: getLinkFromTxid(job.start.txid),
    "Tình trạng công việc": job.end ? "Đang làm việc" : `Kết thúc từ ${job.end.timestamp}`,
  };

  return [part1, part2];
}
