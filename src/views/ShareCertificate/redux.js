const { createSlice } = require("@reduxjs/toolkit");

const initState = {
  currentSelectedAccount: null,
  show: "none", // none, encrypt, decrypt
  encryptedDataOfAccount: {
    publicKeyHex: "",
    certificate: { cipher: {}, blockid: "", txid: "", address: "" },
    subjects: [{ cipher: {}, blockid: "", txid: "", address: "" }, {}],
  },
  decryptedDataOfAccount: {
    publicKeyHex: "",
    certificate: { plain: {}, blockid: "", txid: "", address: "" },
    subjects: [{ plain: {}, blockid: "", txid: "", address: "" }, {}],
  },
};

const shareCertificateSlice = createSlice({
  name: "shareCertificateSlice",
  initialState: initState,
  reducers: {
    resetState: (state, action) => {
      Object.assign(state, initState);
    },
    updateEncryptedState: (state, action) => {
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.show = action.payload.show;
      state.encryptedDataOfAccount = action.payload.encryptedDataOfAccount;
    },
    updateDecryptedState: (state, action) => {
      state.show = "decrypt";
      state.decryptedDataOfAccount = action.payload;
    },
  },
});

export default shareCertificateSlice.reducer;
export const { updateEncryptedState, resetState, updateDecryptedState } = shareCertificateSlice.actions;
