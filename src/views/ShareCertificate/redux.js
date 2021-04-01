const { createSlice } = require("@reduxjs/toolkit");

const initState = {
  selectedAccount: null,
  eduPrograms: null,
  show: "none", // none, encrypt, decrypt
};

const shareCertificateSlice = createSlice({
  name: "shareCertificateSlice",
  initialState: initState,
  reducers: {
    deselectAccount: (state, action) => {
      Object.assign(state, initState);
    },
    setSelectedAccAndEduPrograms: (state, action) => {
      state.selectedAccount = action.payload.selectedAccount;
      state.eduPrograms = action.payload.eduPrograms;
    },
    setSelectedEduProgram: (state, action) => {
      state.selectedEduProgram = action.payload.selectedEduProgram;
      state.show = "encrypt";
    },
    updateDecryptedState: (state, action) => {
      state.show = "decrypt";
      state.decryptedDataOfAccount = action.payload;
    },
  },
});

export default shareCertificateSlice.reducer;
export const { setSelectedEduProgram, deselectAccount, setSelectedAccAndEduPrograms, updateDecryptedState } = shareCertificateSlice.actions;
