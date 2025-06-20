import { createSlice } from "@reduxjs/toolkit";
import {
  fecthContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { logout } from "../auth/operations";
import { selectCurrentContact } from "./selectors";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const handleFullfilled = (state) => {
  state.loading = false;
  state.error = null;
};

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
    currentContact: null,
  },
  reducers: {
    setCurrentContact(state, action) {
      state.currentContact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthContacts.pending, handlePending)
      .addCase(fecthContacts.fulfilled, (state, action) => {
        handleFullfilled(state);
        state.items = action.payload;
      })
      .addCase(fecthContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFullfilled(state);
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        handleFullfilled(state);
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })

      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              name: action.payload.name,
              number: action.payload.number,
            };
          }
          return item;
        });
      });
  },
});

export const { setCurrentContact } = slice.actions;

export default slice.reducer;
