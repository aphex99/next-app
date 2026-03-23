export interface Client {
  id: number;
  name: string;
  email: string;
  type: string;
}

export interface ClientsData {
  clients: Client[];
  totalCount: number | null;
}
