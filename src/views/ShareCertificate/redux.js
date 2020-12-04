const { createSlice } = require("@reduxjs/toolkit");

const initState = {
  currentSelectedAccount: null,
  encryptedDataOfAccount: { certificate: null, subjectPointList: [] },
  show: "none", // none, encrypt, decrypt
  decryptedDataOfAccount: {
    certificate: null,
    subjectPointList: [],
  },
};

const shareCertificateSlice = createSlice({
  name: "shareCertificateSlice",
  initialState: initState,
  reducers: {
    updateEncryptedState: (state, action) => {
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.encryptedDataOfAccount = action.payload.encryptedDataOfAccount;
      state.show = action.payload.show;
    },
    resetState: (state, action) => {
      state = initState;
      return state;
    },
    updateDecryptedState: (state, action) => {
      state.decryptedDataOfAccount = action.payload.decrytedData;
      state.show = "decrypt";
    },
  },
});

export default shareCertificateSlice.reducer;
export const { updateEncryptedState, resetState, updateDecryptedState } = shareCertificateSlice.actions;
