import TableComponent from '@/src/features/table/TableComponent';
import StoreProvider from '@/src/shared/store/StoreProvider';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <StoreProvider>
      <div className={'flex justify-center'}>
        <h1>{'29.07.25'}</h1>
        <Suspense>
          <TableComponent />
        </Suspense>
      </div>
    </StoreProvider>
  );
}
