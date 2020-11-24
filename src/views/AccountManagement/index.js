import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "shared/Grid/GridItem.js";
import GridContainer from "shared/Grid/GridContainer.js";
import CustomInput from "shared/CustomInput/CustomInput";
import RegularButton from "shared/CustomButtons/Button";

import Table from "shared/Table/Table";
import Card from "shared/Card/Card.js";
import CardHeader from "shared/Card/CardHeader.js";
import CardBody from "shared/Card/CardBody.js";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function AccountManagement() {
  const classes = useStyles();
  // const heads = ["#", "Tài khoản", "Mật khẩu", "Ẩn/Hiện mật khẩu", "Đổi mật khẩu"];

  // const accs = [
  //   { username: "nguyenvanan", password: "**********" },
  //   { username: "c1_annv_151098", password: "**********" },
  //   { username: "c2_annv_151098", password: "**********" },
  //   { username: "c3_annv_151098", password: "**********" },
  // ];

  // const tableData = accs.map((acc, index) => [
  //   index + 1,
  //   acc.username,
  //   acc.password,
  //   <Button>
  //     <VisibilityIcon />
  //   </Button>,
  //   <Button>
  //     <EditIcon></EditIcon>
  //   </Button>,
  // ]);

  const heads = ["#", "Tài khoản", "Mật khẩu", "Được tạo bởi", "Ẩn/Hiện mật khẩu", "Đổi mật khẩu"];

  const accs = [
    { username: "nguyenvanan", password: "**************", provider: "nguyenvanan@gmail.com" },
    { username: "c1_annv_151098", password: "**************", provider: "Trường Tiểu học cơ sở Hương Mạc I" },
    { username: "c2_annv_151098", password: "**************", provider: "Trường Trung học cơ sở Hương Mạc I" },
    { username: "c3_annv_151098", password: "**************", provider: "Trường Trung học phổ thông Lý Thái Tổ" },
  ];

  const tableData = accs.map((acc, index) => [
    index + 1,
    acc.username,
    acc.password,
    acc.provider,
    <Button>
      <VisibilityIcon />
    </Button>,
    <Button>
      <EditIcon></EditIcon>
    </Button>,
  ]);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Danh sách các tài khoản</h4>
            <p className={classes.cardCategoryWhite}>Danh sách tất cả các tài khoản bạn đã thêm</p>
          </CardHeader>
          <CardBody>
            <Table tableHeaderColor="primary" tableHead={heads} tableData={tableData} />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Thêm tài khoản mới</h4>
            <p className={classes.cardCategoryWhite}>Thêm tài khoản bạn mới được cấp tại đây</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableData={[
                [
                  <CustomInput labelText="Tên tài khoản" id="username" formControlProps={{ fullWidth: true }} />,
                  <CustomInput labelText="Mật khẩu" id="password" formControlProps={{ fullWidth: true }} />,
                  <RegularButton color="primary" style={{ marginTop: "38px", paddingBottom: "10px" }}>
                    Thêm tài khoản
                  </RegularButton>,
                ],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
