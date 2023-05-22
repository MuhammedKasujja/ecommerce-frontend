import { useFetch } from "src/hooks/useFetch";
import { Order } from "src/types";

export class OrderService {
  static fetchAll() {
    return useFetch<Order[]>(
      "http://127.0.0.1:8000/api/admin/orders/list/canceled",
      {
        type: "GET",
        withPagination: true
      }
    );
  }
}
