'use client';

import { Client } from '@/src/entities/clients/types';
import { ColumnDef } from '@tanstack/react-table';

export type ColumnDefUser = ColumnDef<Client>[];

export const columns: ColumnDefUser = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'type',
    header: 'Type',
  },
];
