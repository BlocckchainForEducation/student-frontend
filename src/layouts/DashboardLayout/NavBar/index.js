import { Avatar, Box, Divider, Drawer, Hidden, List, makeStyles, Typography } from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
// const user = {
//   avatar: "/static/images/avatars/avatar_6.png",
//   jobTitle: "Senior Developer",
//   name: "Katarina Smith",
// };

const items = [
  {
    href: "/nh/thong-tin-ca-nhan",
    icon: PersonIcon,
    title: "Thông tin cá nhân",
  },
  {
    href: "/nh/quan-ly-tai-khoan",
    icon: AccountBalanceWalletIcon,
    title: "Quản lý tài khoản",
  },
  {
    href: "/nh/chia-se-bang-cap",
    icon: AspectRatioIcon,
    title: "Chia sẻ bằng cấp",
  },
  {
    href: "/nh/chia-se-cv",
    icon: AssignmentIndIcon,
    title: "Chia sẻ CV",
  },
  // {
  //   href: "/app/settings",
  //   icon: SettingsIcon,
  //   title: "Settings",
  // },
  // {
  //   href: "/login",
  //   icon: LockIcon,
  //   title: "Login",
  // },
  // {
  //   href: "/register",
  //   icon: UserPlusIcon,
  //   title: "Register",
  // },
  // {
  //   href: "/404",
  //   icon: AlertCircleIcon,
  //   title: "Error",
  // },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
  avatar: {
    cursor: "pointer",
    width: 64,
    height: 64,
  },
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  const user = useSelector((state) => state.studentProfileSlice);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar className={classes.avatar} component={RouterLink} src={user.imgSrc} to="/nh/thong-tin-ca-nhan" />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.level || "Sinh viên Đại học"}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem href={item.href} key={item.title} title={item.title} icon={item.icon} />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer anchor="left" classes={{ paper: classes.mobileDrawer }} onClose={onMobileClose} open={openMobile} variant="temporary">
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer anchor="left" classes={{ paper: classes.desktopDrawer }} open variant="persistent">
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default NavBar;
