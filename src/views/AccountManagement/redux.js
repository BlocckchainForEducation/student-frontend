const { createSlice } = require("@reduxjs/toolkit");

const sawtoothAccountsSlice = createSlice({
  name: "sawtoothAccountsSlice",
  initialState: { accounts: [] },
  reducers: {
    setFetchedAccounts: (state, action) => {
      state.accounts = action.payload;
    },
    addSawtoothAccount: (state, action) => {
      let newAcc = action.payload;
      newAcc.privateKey = newAcc.privateKey
        .split("")
        .map(() => "*")
        .join("");
      state.accounts.push(newAcc);
    },
  },
});

export default sawtoothAccountsSlice.reducer;
export const { setFetchedAccounts, addSawtoothAccount } = sawtoothAccountsSlice.actions;
