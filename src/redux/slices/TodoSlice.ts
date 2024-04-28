import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TodoSliceStateType = {
  user: any;
};

const initialState: TodoSliceStateType = {
  user: {},
};
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<any>) => ({
      ...state,
      user: payload,
    }),
  },
});

export default todosSlice.reducer;

export const { setUser } = todosSlice.actions;
