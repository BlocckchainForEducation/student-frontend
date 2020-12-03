const { createSlice } = require("@reduxjs/toolkit");

const shareCertificateSlice = createSlice({
  name: "shareCertificateSlice",
  initialState: {
    currentSelectedAccount: null,
    encryptedDataOfAccount: { certificate: null, subjectPointList: [] },
    show: "none", // none, encrypt, decrypt
    decryptedDataOfAccount: {
      certificate: null,
      subjectPointList: [],
    },
  },
  reducers: {
    updateStateWhenSelectionChange: (state, action) => {
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.encryptedDataOfAccount = action.payload.encryptedDataOfAccount;
      state.show = action.payload.show;
    },
    updateStateWhenDecryptedData: (state, action) => {
      state.decryptedDataOfAccount = action.payload.decrytedData;
      state.show = "decrypt";
    },
  },
});

export default shareCertificateSlice.reducer;
export const { updateStateWhenSelectionChange, updateStateWhenDecryptedData } = shareCertificateSlice.actions;
