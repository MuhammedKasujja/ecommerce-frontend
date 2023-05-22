import { useFetch } from "src/hooks/useFetch";
import { Product } from "src/types";

export class ProductService {
  static fetchAll() {
    return useFetch<Product[]>(
      "http://127.0.0.1:8000/api/admin/stock/product-stock",
      { type: "GET", withPagination: true }
    );
  }
}
