import { Box, Button, Paper, Typography, useTheme } from "@material-ui/core";

export default function AccountTitleBar({ account }) {
  const theme = useTheme();

  return (
    <Box p={1} display="flex" alignItems="center" justifyContent="space-between" style={{ borderBottom: "1px solid grey" }}>
      <Typography variant="h5" style={{ flexGrow: "1" }}>{`Tài khoản: ${account.publicKeyHex}`}</Typography>
      <Button variant="contained" color="primary" style={{ flexShrink: 0 }}>
        Mở khóa
      </Button>
    </Box>
  );
}
