import { Box, Paper, Typography } from "@material-ui/core";

export default function Jobs({ jobs }) {
  return (
    <Paper style={{ padding: "8px" }}>
      {jobs.map((job, index) => (
        <Box key={index}>
          <Box>
            <Typography gutterBottom variant="h5">{`Mã Công Việc: ${job.jobId}`}</Typography>
            <hr />
            <Box py={1} style={{ wordWrap: "break-word" }}>
              {job.start.cipher}
            </Box>
          </Box>
        </Box>
      ))}
    </Paper>
  );
}
