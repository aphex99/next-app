'use server';

import { createClient } from '@/src/shared/supabase/server';

export async function getPaginationData(page: number, countPerPage: number) {
  const from = (page - 1) * countPerPage;
  const to = from + countPerPage - 1;

  const baseClient = await createClient();

  const { data, count, error } = await baseClient
    .from('clients')
    .select('id, name, email, type', { count: 'exact' })
    .range(from, to);
  if (error) {
    console.error('Error fetching clients: ', error.message);
    console.error('Full error: ', error);
    return { data: [], totalCount: 0 };
  }

  return { data, totalCount: count };
}
