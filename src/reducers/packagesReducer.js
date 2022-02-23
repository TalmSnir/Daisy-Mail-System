import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const notifyUserAll = createAsyncThunk(
  'packages/notifyUserAll',
  async payload => {
    const { name, userPackagesNum, email } = payload;
    const response = await fetch('/daisy-api-sim/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        content: `Hey ${name} You have ${userPackagesNum} packages waiting for pickup!`,
      }),
    });
    return response.json();
  }
);

export const notifyUserSingle = createAsyncThunk(
  'packages/notifyUserSingle',
  async payload => {
    const { name, email, type, carrier } = payload;

    const response = await fetch('/daisy-api-sim/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        content: `Hey ${name} You have a new ${type} package from ${carrier} waiting for pickup!`,
      }),
    });
    return response.json();
  }
);

const initialState = {
  allPackages: [],
  packagesByUsers: [],
};

const packagesSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    setAllPackages: (state, action) => {
      state.allPackages = action.payload;
    },
    addPackage: (state, action) => {
      state.allPackages.push(action.payload);
    },
    removePackage: (state, action) => {
      state.allPackages = state.allPackages.filter(
        packageItem => packageItem.id !== action.payloads
      );
    },

    filterPackagesByUsers: state => {
      const filteredByName = new Set(
        state.allPackages.map(pack => pack.recipient.name)
      );
      state.packagesByUsers = [...filteredByName];
    },
  },
  extraReducers: {
    [notifyUserAll.pending]: (state, action) => {
      state.status = 'posting';
    },
    [notifyUserAll.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.posting = 'success';
    },
    [notifyUserSingle.pending]: (state, action) => {
      state.status = 'posting';
    },
    [notifyUserSingle.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.posting = 'success';
    },
  },
});

export const {
  setAllPackages,
  addPackage,
  removePackage,
  filterPackagesByUsers,
} = packagesSlice.actions;
export default packagesSlice.reducer;
