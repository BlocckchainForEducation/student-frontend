import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function ShareCVButtonBar({ hdClickShareCV }) {
  const cls = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    // <Paper className={cls.root}>
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        {/* <Alert severity="success">
            <AlertTitle>Lấy dữ liệu bản mã thành công!</AlertTitle>
          </Alert> */}
      </Box>
      <Box pl={2} flexShrink={0}>
        <Button variant="contained" color="primary" onClick={hdClickShareCV}>
          Chia sẻ CV
        </Button>
      </Box>
    </Box>
    // </Paper>
  );
}
