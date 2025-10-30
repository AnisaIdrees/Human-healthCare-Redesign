import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Form data type
export interface ContactFormData {
  firstName: string;
  lastName:string;
  email: string;
  message: string;
}

// Slice state type
interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// Initial state
const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

// Async thunk with typed thunkAPI
export const sendContactForm = createAsyncThunk<
  { message: string },               // Return type
  ContactFormData,                   // Argument type
  { rejectValue: string }            // rejectWithValue type
>(
  'contact/sendContactForm',
  async (formData: ContactFormData, thunkAPI) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');
      const data: { message: string } = await res.json();
      return data;
    } catch (err) {
      const message: string = err instanceof Error ? err.message : 'Unknown error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Slice
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<ContactState>) => {
    builder.addCase(sendContactForm.pending, (state: ContactState) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    });

    builder.addCase(sendContactForm.fulfilled, (state: ContactState) => {
      state.loading = false;
      state.success = true;
    });

    builder.addCase(
      sendContactForm.rejected,
      (state: ContactState, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'Unknown error';
      }
    );
  },
});

export default contactSlice.reducer;
