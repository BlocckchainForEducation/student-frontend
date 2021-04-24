import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import View from "../../shared/View";
import AccountTable from "./AccountTable";
import AddAccount from "./AddAccount";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * ": {
      marginBottom: theme.spacing(4),
    },
  },
}));

export default function AccountManagement() {
  const cls = useStyles();
  const loading = useSelector((state) => state.sawtoothAccountsSlice.fetching);

  return (
    <View title="Quản lý tài khoản">
      {loading ? null : (
        <Box className={cls.root}>
          <AccountTable></AccountTable>
          <AddAccount></AddAccount>
        </Box>
      )}
    </View>
  );
}
