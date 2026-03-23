/** @jsxImportSource @emotion/react */
'use client';

import { Client } from '@/src/entities/clients/types';
import {
  cellInnerStyle,
  cellStyle,
  headStyle,
  rowStyle,
  tableStyles,
} from './Table.styles';

import { columns } from '../../model/columns';

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type TableProps = {
  clients: Client[];
};

export default function Table({ clients }: TableProps) {
  const table = useReactTable({
    data: clients,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table css={tableStyles}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} css={rowStyle}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} colSpan={header.colSpan} css={headStyle}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, i) => (
          <tr key={row.id} css={rowStyle}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} css={cellStyle}>
                <div css={cellInnerStyle}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
