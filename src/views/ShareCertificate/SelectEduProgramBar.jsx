import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedEduProgram } from "./redux";

export default function ShowEduProgramsInfo() {
  const eduPrograms = useSelector((state) => state.shareCertificateSlice.eduPrograms);
  const selectedEduProgram = useSelector((state) => state.shareCertificateSlice.selectedEduProgram);
  const show = useSelector((state) => state.shareCertificateSlice.show);

  const dp = useDispatch();

  function hdChangeSelection(e, selectedEduProgram) {
    dp(setSelectedEduProgram({ selectedEduProgram }));
  }

  return (
    <Autocomplete
      size="small"
      renderInput={(params) => <TextField {...params} label="Chọn chương trình đào tạo" variant="outlined" />}
      options={eduPrograms}
      getOptionLabel={(eduProgram) => eduProgram.subjects[0].versions[0].portfolio_id}
      value={selectedEduProgram}
      getOptionSelected={(option, value) => option.subjects[0].versions[0].portfolio_id === value.subjects[0].versions[0].portfolio_id}
      onChange={hdChangeSelection}
    />
  );
}
