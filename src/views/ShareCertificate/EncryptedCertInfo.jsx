import { Box, Button, Divider, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export default function EncryptedCertInfo(props) {
  const cls = useStyles();
  const fakeData = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sit ut molestiae aliquam repellendus, impedit nemo rerum ex ab eaque labore adipisci nam, deleniti dolor asperiores reprehenderit unde, beatae laudantium tempore deserunt vero nostrum dolore reiciendis sed. t. Itaque sit ut molest".repeat(
    5
  );
  return (
    <div>
      <Paper className={cls.root}>
        <Box mb={1}>
          <Typography variant="h4">Thông tin bằng cấp (dạng mã hóa)</Typography>
        </Box>
        <Divider></Divider>
        <Box mt={2}>{fakeData}</Box>
      </Paper>
    </div>
  );
}
