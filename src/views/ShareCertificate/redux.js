const { createSlice } = require("@reduxjs/toolkit");

const initState = {
  currentSelectedAccount: null,
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
    setSelectedAccountAndData: (state, action) => {
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.eduPrograms = action.payload.eduPrograms;
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
export const { updateEncryptedState, deselectAccount, setSelectedAccountAndData, updateDecryptedState } = shareCertificateSlice.actions;
