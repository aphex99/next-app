'use client';

import { useEffect, useState } from 'react';

import { Client, ClientsData } from '@/src/entities/clients/types';

import Table from './ui/Table/Table';
import { COUNT_PER_PAGE } from './model/consts';
import TablePagination from './ui/TablePagination/TablePagination';

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
    <div>
      <Table clients={clientsData.clients} />
      <TablePagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCount={clientsData.totalCount}
      />
      <hr />
    </div>
  );
};

export default TableComponent;
