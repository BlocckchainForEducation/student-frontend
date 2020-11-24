import { Avatar, Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "src/utils/mng-token";
import { updateImgSrc } from "./redux";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "relative",
  },
  avatar: {
    height: "128px",
    width: "128px",
    margin: "auto",
    position: "relative",
    // left: 0,
    // right: 0,
    // zIndex: "1",
  },
  paper: {
    // position: "absolute",
    // top: "64px",
    marginTop: "-64px",
    width: "100%",
  },
  name: {
    fontWeight: 600,
  },
  description: {
    fontWeight: 300,
    lineHeight: "1.5rem",
  },
}));

export default function AvatarBar() {
  const cls = useStyles();
  const studentName = useSelector((state) => state.studentProfile.name);
  const avatarSrc = useSelector((state) => state.studentProfile.imgSrc);
  const description = useSelector((state) => state.studentProfile.description);
  const { enqueueSnackbar } = useSnackbar();
  const dp = useDispatch();

  async function hdChangeAvatar(e) {
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/change-avatar`, {
      method: "POST",
      headers: { Authorization: getToken() },
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json();
      enqueueSnackbar("Something went wrong: " + JSON.stringify(err), { variant: "error", anchorOrigin: { vertical: "top", horizontal: "center" } });
    } else {
      const imgSrc = await res.json();
      dp(updateImgSrc(imgSrc));
      enqueueSnackbar("Cập nhật Avatar thành công!", { variant: "success", anchorOrigin: { vertical: "bottom", horizontal: "right" } });
    }
  }

  return (
    <Box className={cls.root}>
      <label htmlFor="avatar">
        <input type="file" accept="image/*" id="avatar" style={{ display: "none" }} onChange={hdChangeAvatar} />
        <Avatar src={avatarSrc} className={cls.avatar}></Avatar>
      </label>
      <Paper className={cls.paper}>
        <Box textAlign="center" px={3} pb={3} pt={"96px"}>
          <Typography variant="h5" gutterBottom>
            Sinh viên Đại học
          </Typography>
          <Typography variant="h3" gutterBottom className={cls.name}>
            {studentName || "Nguyen Van A"}
          </Typography>
          <Typography variant="body2" className={cls.description}>
            {description ||
              "Quisque laoreet, sem a cursus blandit, lectus libero vestibulum purus, id malesuada risus sem id nulla. Curabitur suscipit, dolor at imperdiet dapibus, arcu massa semper enim, vitae consectetur nulla leo blandit nisi. Duis aliquam non turpis sit amet pellentesque. Sed arcu neque, sollicitudin vel ultricies"}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
