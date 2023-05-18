export type Order = {
  id: number;
  description: string;
  date: string;
  customer: string;
  state: number;
  total: number;
  status: number;
};

export type OrderStatus = {
  pending: 2;
  confirmed: 5;
  processing: number;
  out_for_delivery: number;
  delivered: number;
  canceled: number;
  returned: number;
  failed: number;
};

export type OrderStatistics = {
  pending: number;
  confirmed: number;
  processing: number;
  out_for_delivery: number;
  delivered: number;
  canceled: number;
  returned: number;
  failed: number;
};
