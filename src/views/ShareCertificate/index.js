import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import TableWithTitle from "../../../shared/Table/TableWithTitle";
import TwoPartTableWithTitle from "../../../shared/Table/TwoPartTableWithTitle";

const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  summary: { backgroundImage: "linear-gradient(to right, #aa46bc,#9830b0)", color: "white", fontWeight: "lighter" },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: "97%",
    flexShrink: 0,
  },
  content: { marginBottom: "0px", marginTop: "0px" },
  sizeSmall: { width: "21px", height: "21px" },
}));

export default function ShareCertificate() {
  const classes = useStyles();
  const title = "Thông tin bằng tốt nghiệp THCS";
  const certPart1 = {
    "Họ và tên": "Nguyễn Văn An",
    "Ngày sinh": "01/01/1998",
    "Nơi sinh": "Từ Sơn, Bắc Ninh",
    "Giới tính": "Nam",
    "Dân tộc": "Kinh",
    "Học sinh trường": "Trung học cơ sở Hương Mạc I",
    "Năm tốt nghiệp": "2016",
  };

  const certPart2 = {
    "Xếp loại tốt nghiệp": "Khá",
    "Hình thức đào tạo": "Chính quy",
    "Số hiệu": "A09050634",
    "Số vào sổ cấp bằng": "185",
    "Trưởng phòng GD&ĐT": "Nguyễn Văn Bình",
    Txid: "2443d2798645516f6d985347ba456ce6da416063952565d0a33d0d2009ee7a3f".substr(0, 20),
  };

  const lop6Title = "Bảng điểm lớp 6";
  const c2heads = ["Môn học", "Học kì I", "Học kì II", "Cẳ năm", "Giáo viên bộ môn", "Txid"];
  const lop6rows = [
    ["Toán", "94", "90", "91", "Nguyễn A"],
    ["Vật lí", 89, 91, 90, "Nguyễn B"],
    ["Sinh học", 85, 89, 88, "Nguyễn C"],
    ["Ngữ Văn", 84, 83, 83, "Nguyễn D"],
    ["Lịch sử", 91, 89, 90, "Nguyễn E"],
    ["Địa lí", 90, 96, 94, "Nguyễn F"],
    ["Tiếng Anh", 87, 87, 87, "Nguyễn G"],
    ["GDCG", 94, 92, 93, "Nguyễn F"],
    ["Công nghệ", 94, 91, 92, "Nguyễn H"],
    ["Thể dục", 74, 76, 75, "Nguyễn I"],
    ["Âm nhạc", 91, 96, 94, "Nguyễn K"],
    ["Mĩ thuật", 94, 98, 97, "Nguyễn L"],
  ];

  const c1certTitle = "Thông tin chứng nhận hoàn thành chương trình Tiểu học";
  const c1certPart1 = {
    "Họ và tên": "Nguyễn Văn An",
    "Ngày sinh": "01/01/1998",
    "Nơi sinh": "Từ Sơn, Bắc Ninh",
    "Giới tính": "Nam",
    "Dân tộc": "Kinh",
  };
  const c1certPart2 = {
    "Học sinh trường": "Tiểu học cơ sở Hương Mạc I",
    "Năm tốt nghiệp": "2009",
    "GVCN lớp 5": "Nguyễn Thị Dung",
    "Hiệu trưởng": "Nguyễn Văn Chiến",
  };

  const lop1Title = "Bảng điểm lớp 1";
  const c1heads = ["Môn học", "Học kì I", "Học kì II", "Cả năm", "Nhận xét của GV", "Txid"];
  const lop1rows = [
    ["Toán", "10", "10", "G", "Làm toán nhanh", "06ad57a2b039ce22a2dbee..."],
    ["Tiếng Việt", "9.5", "8.5", "G", "Đọc nhanh", "06ad57a2b039ce22a2dbee..."],
    ["Đạo đức", "A", "A", "A", "Hoàn thành"],
    ["Tự nhiên và xã hội", "A+", "A+", "A+", "Hoàn thành tốt"],
    ["Khoa học", "", "", "", ""],
    ["Lịch sử và Địa lý", "", "", "", ""],
    ["Âm nhạc", "A", "A", "A", "Hoàn thành"],
    ["Mĩ thuật", "A", "A", , "A", "Hoàn thành"],
    ["Thủ công", "A", "A", , "A", "Hoàn thành"],
    ["Thể dục", "A", "A", , "A", "Hoàn thành"],
  ];
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="white" />}
          id="panel1a-header"
          className={classes.summary}
          classes={classes}
        >
          <Typography className={classes.heading}>#1 Bằng tốt nghiệp tiểu học cơ sở Hương Mạc</Typography>
          <IconButton color="inherit" size="small" classes={classes}>
            <ShareIcon></ShareIcon>
          </IconButton>

          {/* <Button classes={classes} color="inherit" variant="outlined" size="small">
            <ShareIcon></ShareIcon>
          </Button> */}
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-100">
            <div>
              <TwoPartTableWithTitle
                title={c1certTitle}
                certPart1={c1certPart1}
                certPart2={c1certPart2}
              ></TwoPartTableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title={lop1Title} heads={c1heads} rows={lop1rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title="Bảng điểm lớp 2" heads={c1heads} rows={lop1rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title="Bảng điểm lớp 3" heads={c1heads} rows={lop1rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title="Bảng điểm lớp 4" heads={c1heads} rows={lop1rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title="Bảng điểm lớp 5" heads={c1heads} rows={lop1rows}></TableWithTitle>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="white" />}
          id="panel1a-header"
          className={classes.summary}
          classes={classes}
        >
          <Typography className={classes.heading}>#1 Bằng tốt nghiệp trung học cơ sở Hương Mạc</Typography>
          <IconButton color="inherit" size="small" classes={classes}>
            <ShareIcon></ShareIcon>
          </IconButton>
        </AccordionSummary>
        <AccordionDetails>
          <div className="w-100">
            <div>
              <TwoPartTableWithTitle {...{ title, certPart1, certPart2 }}></TwoPartTableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title={lop6Title} heads={c2heads} rows={lop6rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title={"Bảng điểm lớp 7"} heads={c2heads} rows={lop6rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title={"Bảng điểm lớp 8"} heads={c2heads} rows={lop6rows}></TableWithTitle>
            </div>
            <div className="mt-3">
              <TableWithTitle title={"Bảng điểm lớp 9"} heads={c2heads} rows={lop6rows}></TableWithTitle>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
    // <div class="accordion" id="accordionExample">
    //   <div class="card">
    //     <div class="card-header" id="headingOne">
    //       <h2 class="mb-0">
    //         <button
    //           class="btn  btn-block text-left"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#collapseOne"
    //         >
    //           <div className="d-flex justify-content-between">
    //             <div>
    //               #1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Recusandae
    //             </div>
    //             <div>
    //               <span className="mr-3">icon1</span>
    //               <span>icon2</span>
    //             </div>
    //           </div>
    //         </button>
    //       </h2>
    //     </div>

    //     <div
    //       id="collapseOne"
    //       class="collapse show"
    //       data-parent="#accordionExample"
    //     >
    //       <div class="card-body">
    //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    //         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
    //         skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
    //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
    //         single-origin coffee nulla assumenda shoreditch et. Nihil anim
    //         keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
    //         sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
    //         occaecat craft beer farm-to-table, raw denim aesthetic synth
    //         nesciunt you probably haven't heard of them accusamus labore
    //         sustainable VHS.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="card">
    //     <div class="card-header" id="headingTwo">
    //       <h2 class="mb-0">
    //         <button
    //           class="btn btn-link btn-block text-left collapsed"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#collapseTwo"
    //           aria-expanded="false"
    //           aria-controls="collapseTwo"
    //         >
    //           Collapsible Group Item #2
    //         </button>
    //       </h2>
    //     </div>
    //     <div
    //       id="collapseTwo"
    //       class="collapse"
    //       aria-labelledby="headingTwo"
    //       data-parent="#accordionExample"
    //     >
    //       <div class="card-body">
    //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    //         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
    //         skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
    //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
    //         single-origin coffee nulla assumenda shoreditch et. Nihil anim
    //         keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
    //         sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
    //         occaecat craft beer farm-to-table, raw denim aesthetic synth
    //         nesciunt you probably haven't heard of them accusamus labore
    //         sustainable VHS.
    //       </div>
    //     </div>
    //   </div>
    //   <div class="card">
    //     <div class="card-header" id="headingThree">
    //       <h2 class="mb-0">
    //         <button
    //           class="btn btn-link btn-block text-left collapsed"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#collapseThree"
    //           aria-expanded="false"
    //           aria-controls="collapseThree"
    //         >
    //           Collapsible Group Item #3
    //         </button>
    //       </h2>
    //     </div>
    //     <div
    //       id="collapseThree"
    //       class="collapse"
    //       aria-labelledby="headingThree"
    //       data-parent="#accordionExample"
    //     >
    //       <div class="card-body">
    //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
    //         terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
    //         skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
    //         Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
    //         single-origin coffee nulla assumenda shoreditch et. Nihil anim
    //         keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
    //         sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
    //         occaecat craft beer farm-to-table, raw denim aesthetic synth
    //         nesciunt you probably haven't heard of them accusamus labore
    //         sustainable VHS.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
