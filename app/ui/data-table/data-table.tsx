'use client';

import { columns } from '@/app/services/column';
import { Clients } from '@/app/types';
import { clientsData } from '@/lib/data/clients/clients';
import { addClients } from '@/lib/features/clients/clientsSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { useEffect } from 'react';

export default function BasicTable() {
    const clients: Clients = useAppSelector((state) => state.clients);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (clients.length <= 1) {
            dispatch(addClients(clientsData));
        }
    }, [clients]);

    const table = useReactTable({
        data: clients,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className={'my-20'}>
            <table>
                <thead className={'border-2'}>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            <th></th>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    className={'p-2'}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext(),
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className={'border-2'}>
                    {table.getRowModel().rows.map((row, i) => (
                        <tr
                            key={row.id}
                            className={`border-2 ${i % 2 === 0 && 'bg-gray-100'}`}
                        >
                            <th className={'pl-2 pt-0.5 text-xs font-light'}>
                                {i + 1}
                            </th>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className={'px-5 py-2'}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext(),
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
