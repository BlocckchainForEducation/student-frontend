import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import View from "../../shared/View";
import AccountTable from "./AccountTable";
import AddAccountByWallet from "./AddAccountByWallet";
import AddAccountForm from "./AddAccountForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * ": {
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function AccountManagement() {
  const cls = useStyles();

  return (
    <View title="Quản lý tài khoản">
      <Box className={cls.root}>
        <AccountTable></AccountTable>
        <AddAccountForm></AddAccountForm>
        <AddAccountByWallet></AddAccountByWallet>
      </Box>
    </View>
  );
}
