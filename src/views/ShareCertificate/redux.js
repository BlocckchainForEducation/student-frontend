const { createSlice } = require("@reduxjs/toolkit");

const shareCertificateSlice = createSlice({
  name: "shareCertificateSlice",
  initialState: { currentSelectedAccount: null, encryptedDataOfAccount: { certificate: null, subjectPointList: [] }, show: false },
  reducers: {
    updateStateOnSelectionChange: (state, action) => {
      state.currentSelectedAccount = action.payload.currentSelectedAccount;
      state.encryptedDataOfAccount = action.payload.encryptedDataOfAccount;
      state.show = "encrypt";
    },
  },
});

export default shareCertificateSlice.reducer;
export const { updateStateOnSelectionChange } = shareCertificateSlice.actions;
