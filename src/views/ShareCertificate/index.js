import { Box, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import View from "../../shared/View";
import DecryptedCertInfo from "./DecryptedCertInfo";
import DecryptedSubjectTable from "./DecryptedSubjectTable";
import EncryptedCertInfo from "./EncryptedCertInfo";
import EncryptedSubjectTable from "./EncryptedSubjectTable";
import AlertFetchResultBar from "./AlertFetchResultBar";
import SelectionBar from "./SelectionBar";
import SelectBar from "./SelectionBar";
import AlertDecryptResultBar from "./AlertDecryptResultBar";

const useStyels = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2, 0),
    },
  },
}));

export default function ShareCertificate(props) {
  const cls = useStyels();
  const show = useSelector((state) => state.shareCertificateSlice.show);

  return (
    <View title="Chia sẻ bằng cấp">
      <Box className={cls.root}>
        <SelectionBar></SelectionBar>
        {show === "encrypt" && (
          <>
            <AlertFetchResultBar></AlertFetchResultBar>
            <EncryptedCertInfo></EncryptedCertInfo>
            <EncryptedSubjectTable></EncryptedSubjectTable>
          </>
        )}
        {show === "decrypt" && (
          <>
            <AlertDecryptResultBar></AlertDecryptResultBar>
            <DecryptedCertInfo></DecryptedCertInfo>
            <DecryptedSubjectTable></DecryptedSubjectTable>
          </>
        )}
      </Box>
    </View>
  );
}
