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
      if (newAcc.privateKey === "") {
        newAcc.privateKey = false;
      }
      state.accounts.push(newAcc);
    },
    deleteSawtoothAccount: (state, action) => {
      state.accounts = state.accounts.filter((acc) => acc.publicKey !== action.payload.publicKey);
    },
  },
});

export default sawtoothAccountsSlice.reducer;
export const { setFetchedAccounts, addSawtoothAccount, deleteSawtoothAccount } = sawtoothAccountsSlice.actions;
