import {createClient} from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export async function getClients() {
    try {
        const {data, error} = await supabase.from('clients').select();
        return data;
    } catch (e) {
        console.error(e);
    }
}