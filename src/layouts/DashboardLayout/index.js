import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import { getToken } from "../../utils/mng-token";
import { setProfile } from "../../views/StudentProfile/redux";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../shared/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: 64,
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 256,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const loading = useSelector((state) => state.studentProfileSlice.fetching);
  const dp = useDispatch();

  async function fetchStudentProfile() {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/profile`, {
        headers: { Authorization: getToken() },
      });
      if (!response.ok) {
        alert(JSON.stringify(await response.json()));
      } else {
        dp(setProfile(await response.json()));
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  // async function fetchSawtoothAccounts() {
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/student/sawtooth-accounts`, {
  //       headers: { Authorization: getToken() },
  //     });
  //     if (!response.ok) {
  //       alert(JSON.stringify(await response.json()));
  //     } else {
  //       const sawtoothAccounts = await response.json();
  //       if (sawtoothAccounts) {
  //         dp(setFetchedAccounts(sawtoothAccounts));
  //       }
  //       // setLoading(false);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     alert(err);
  //   }
  // }
  // async function fetchCertificate() {}

  useEffect(() => {
    fetchStudentProfile();
    // fetchSawtoothAccounts();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={classes.root}>
            <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
            <NavBar onMobileClose={() => setMobileNavOpen(false)} openMobile={isMobileNavOpen} />
            <div className={classes.wrapper}>
              <div className={classes.contentContainer}>
                <div className={classes.content}>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardLayout;
