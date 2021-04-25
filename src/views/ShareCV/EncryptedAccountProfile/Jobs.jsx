import { Box, Paper, Typography } from "@material-ui/core";

export default function Jobs({ jobs }) {
  return (
    <Paper style={{ padding: "8px" }}>
      {jobs.map((job, index) => (
        <Box key={index}>
          <Box>
            <Typography gutterBottom>{`Mã Công Việc: ${job.jobId}`}</Typography>
            <hr />
            <Box py={1}>{job.start.cipher}</Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
