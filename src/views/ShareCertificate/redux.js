const { createSlice } = require("@reduxjs/toolkit");

const initState = {
  currentSelectedAccount: null,
  show: "none", // none, encrypt, decrypt
  encryptedDataOfAccount: {
    publicKeyHex: "",
    certificate: { address: "", versions: [{ txid: "", timestamp: 1234, active: "", cipher: "" }] },
    subjects: [{ address: "", versions: [{ txid: "", timestamp: 1234, active: "", cipher: "" }] }, {}],
  },
  decryptedDataOfAccount: {
    publicKeyHex: "",
    certificate: { address: "", versions: [{ txid: "", timestamp: 1234, active: "", plain: "" }] },
    subjects: [{ address: "", versions: [{ txid: "", timestamp: 1234, active: "", plain: "" }] }, {}],
  },
};

const shareCertificateSlice = createSlice({
  name: "shareCertificateSlice",
  initialState: initState,
  reducers: {
    resetState: (state, action) => {
      Object.assign(state, initState);
    },
    setSelectedAccountAndData: (state, action) => {
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.dataOfCurrentSelectedAccount = action.payload.data;
    },
    updateEncryptedState: (state, action) => {
      state.show = "encrypt";
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.encryptedDataOfAccount = action.payload.encryptedDataOfAccount;
    },
    updateDecryptedState: (state, action) => {
      state.show = "decrypt";
      state.decryptedDataOfAccount = action.payload;
    },
  },
});

export default shareCertificateSlice.reducer;
export const { updateEncryptedState, resetState, setSelectedAccountAndData, updateDecryptedState } = shareCertificateSlice.actions;
