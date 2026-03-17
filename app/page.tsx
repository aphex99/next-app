import TableComponent from '@/src/features/table/TableComponent';
import StoreProvider from '@/src/shared/store/StoreProvider';

export default async function HomePage() {
  return (
    <StoreProvider>
      <div className={'flex justify-center'}>
        <TableComponent />
      </div>
    </StoreProvider>
  );
}
