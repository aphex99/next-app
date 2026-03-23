/** @jsxImportSource @emotion/react */
'use client';

import { COUNT_PER_PAGE } from '@/src/pages/table/model/consts';
import { useEffect, useState } from 'react';

import { Client, ClientsData } from '@/src/entities/clients/types';

import Table from './ui/Table/Table';
import TablePagination from './ui/TablePagination/TablePagination';

import { h2Style, hrStyle, wrapperStyle } from './TableComponent.styles';

function isClientsData(data: Client[], totalCount: number | null) {
  return (
    totalCount !== null &&
    Array.isArray(data) &&
    data.every(
      (client) => client && 'name' in client && typeof client.name === 'string',
    )
  );
}

const TableComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [clientsData, setClientsData] = useState<ClientsData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `/api/clients?page=${currentPage}&perPage=${COUNT_PER_PAGE}`,
        );
        const { data, totalCount } = await res.json();

        if (isClientsData(data, totalCount)) {
          setClientsData({ clients: data, totalCount: totalCount });
        }
      } catch (error) {
        console.error('Error fetching clients data: ', error);
      }
    }

    fetchData().finally();
  }, [currentPage]);

  if (!clientsData) return null;

  return (
    <div css={wrapperStyle}>
      <h2 css={h2Style}>Accounts</h2>
      <hr css={hrStyle} />
      <Table clients={clientsData.clients} />
      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={clientsData.totalCount}
      />
    </div>
  );
};

export default TableComponent;
