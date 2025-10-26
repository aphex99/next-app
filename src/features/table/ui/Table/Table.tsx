'use client';

import { Clients } from '@/src/entities/clients/types';
import { columns } from '@/src/features/table/types/column';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type TableProps = {
  clients: Clients;
};

export default function Table({ clients }: TableProps) {
  const table = useReactTable({
    data: ((clients as Clients) ??= []),
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={'mt-20 mb-6 w-full'}>
      <table className={'w-full'}>
        <thead className={'border-2'}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th></th>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan} className={'p-2'}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={'border-2 w-full'}>
          {table.getRowModel().rows.map((row, i) => (
            <tr
              key={row.id}
              className={`border-2 ${i % 2 === 0 && 'bg-gray-100'}`}
            >
              <th className={'pl-2 pt-0.5 text-xs font-light'}>{i + 1}</th>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={'px-5 py-2'}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
