const { createSlice } = require("@reduxjs/toolkit");

const sawtoothAccountsSlice = createSlice({
  name: "sawtoothAccountsSlice",
  initialState: { fetching: true, accounts: [] },
  reducers: {
    setFetchedAccounts: (state, action) => {
      state.fetching = false;
      state.accounts = action.payload;
    },
    addSawtoothAccount: (state, action) => {
      let newAcc = action.payload;
      // newAcc.privateKey = "*".repeat(newAcc.privateKey.length);

      state.accounts.push(newAcc);
    },
  },
});

export default sawtoothAccountsSlice.reducer;
export const { setFetchedAccounts, addSawtoothAccount } = sawtoothAccountsSlice.actions;
