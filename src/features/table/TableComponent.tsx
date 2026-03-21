'use client';

import { Clients } from '@/src/entities/clients/types';
import { COUNT_PER_PAGE } from '@/src/features/table/model/consts';
import Table from '@/src/features/table/ui/Table/Table';
import TablePagination from '@/src/features/table/ui/TablePagination/TablePagination';
import { useEffect, useState } from 'react';

type ClientsData = {
  clients: Clients;
  totalCount: number | null;
};

function isClientsData(data: Clients, totalCount: number | null) {
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
    <div className={'flex flex-col items-center w-xl'}>
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
