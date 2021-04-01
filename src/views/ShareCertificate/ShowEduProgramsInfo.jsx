import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";
import AlertDecryptResultBar from "./AlertDecryptResultBar";
import DecryptedCertInfo from "./DecryptedCertInfo";
import DecryptedSubjectTable from "./DecryptedSubjectTable";
import EncryptedCertInfo from "./EncryptedCertInfo";
import EncryptedSubjectTable from "./EncryptedSubjectTable";
import DecryptDataButtonBar from "./DecryptDataBar";

export default function ShowEduProgramsInfo({ eduPrograms }) {
  const [selectedEduProgram, setSelectedEduProgram] = useState(null);
  const [show, setShow] = useState(null);

  function hdChangeSelection(e, selectedEduPro) {
    setSelectedEduProgram(selectedEduPro);
    setShow("encrypted");
  }

  return (
    <div>
      <Autocomplete
        size="small"
        renderInput={(params) => <TextField {...params} label="Chọn chương trình đào tạo" variant="outlined" />}
        options={eduPrograms}
        getOptionLabel={(eduProgram) => eduProgram.subjects[0].versions[0].portfolio_id}
        value={selectedEduProgram}
        getOptionSelected={(option, value) => option.subjects[0].versions[0].portfolio_id === value.subjects[0].versions[0].portfolio_id}
        onChange={hdChangeSelection}
      />

      {selectedEduProgram && show === "encrypted" && (
        <>
          <DecryptDataButtonBar></DecryptDataButtonBar>
          <EncryptedCertInfo></EncryptedCertInfo>
          <EncryptedSubjectTable></EncryptedSubjectTable>
        </>
      )}

      {selectedEduProgram && show === "decrypted" && (
        <>
          <AlertDecryptResultBar></AlertDecryptResultBar>
          <DecryptedCertInfo></DecryptedCertInfo>
          <DecryptedSubjectTable></DecryptedSubjectTable>
        </>
      )}
    </div>
  );
}
