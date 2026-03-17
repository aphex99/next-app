import { createClient } from '@/src/shared/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const page = Number(searchParams.get('page') ?? 1);
    const perPage = Number(searchParams.get('perPage') ?? 5);
    const from = (page - 1) * perPage;
    const to = from + perPage - 1;

    const supabase = await createClient();

    const { data, count, error } = await supabase
      .from('clients')
      .select('id, name, email, type', { count: 'exact' })
      .range(from, to);

    if (error) {
      console.error('Supabase error: ', error);
      return NextResponse.json(
        { error: error.message, data: [], totalCount: 0 },
        { status: 500 },
      );
    }

    return NextResponse.json({ data: data ?? [], totalCount: count ?? 0 });
  } catch (error) {
    console.error('Unexpected API error: ', error);
    return NextResponse.json({
      error: (error as Error).message ?? 'Unknown error',
      data: [],
      totalCount: 0,
    });
  }
}
