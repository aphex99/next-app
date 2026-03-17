'use client';

import { Clients } from '@/src/entities/clients/types';

import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit';

const initialState: Clients = [
  {
    id: 1,
    name: 'Belov Roman',
    email: 'broman@gmail.com',
    type: 'individual',
  },
];

const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const clientsSlice = createAppSlice({
  name: 'clients',
  initialState,
  reducers: () => {
    return {};
  },
});

export const clientsReducer = clientsSlice.reducer;
