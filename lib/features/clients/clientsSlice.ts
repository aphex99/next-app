'use client';
import { Clients } from '@/app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Clients = [
    {
        id: 1,
        name: 'Belov Roman',
        email: 'broman@gmail.com',
        type: 'individual',
    },
];

const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        addClients(state, action: PayloadAction<Clients>) {
            return action.payload;
        },
    },
});

export const { addClients } = clientsSlice.actions;
export const clientsReducer = clientsSlice.reducer;
