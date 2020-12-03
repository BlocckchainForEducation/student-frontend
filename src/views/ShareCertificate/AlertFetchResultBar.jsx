import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    "& .MuiTypography-gutterBottom": {
      marginBottom: 0,
    },
  },
}));

export default function AlertFetchResultBar(props) {
  const cls = useStyles();

  return (
    <div>
      <Paper className={cls.root}>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Alert severity="success">
              <AlertTitle>Lấy dữ liệu bản mã thành công!</AlertTitle>
            </Alert>
          </Box>
          <Box pl={2} flexShrink={0}>
            <Button variant="contained" color="primary">
              Giải mã
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
