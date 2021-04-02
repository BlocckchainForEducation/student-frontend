const { createSlice } = require("@reduxjs/toolkit");

const initState = {
  selectedAccount: null,
  eduPrograms: null,
  selectedEduProgram: null,
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
    deselectEduProgram: (state, action) => {
      state.selectedEduProgram = null;
      state.show = "none";
    },
    setDecryptedEduProgram: (state, action) => {
      state.decryptedEduProgram = action.payload;
      state.show = "decrypt";
    },
  },
});

export default shareCertificateSlice.reducer;
export const {
  deselectAccount,
  setSelectedAccAndEduPrograms,
  setSelectedEduProgram,
  deselectEduProgram,
  setDecryptedEduProgram,
} = shareCertificateSlice.actions;
