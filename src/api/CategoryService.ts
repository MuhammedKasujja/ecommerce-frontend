import { useFetch } from "src/hooks/useFetch";
import { Category, CategoryDTO } from "src/types";

export class CategoryService {
  static fetchAll() {
    return useFetch<Category[]>(
      "http://127.0.0.1:8000/api/admin/category/view",
      {
        type: "GET",
        withPagination: true,
      }
    );
  }

  static addNew(data: CategoryDTO, dependes: number) {
    const formData = new FormData();
    for (let key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key as keyof CategoryDTO]);
      }
    }
    return useFetch("http://127.0.0.1:8000/api/admin/category/store", {
      type: "POST",
      dependes,
      data: formData,
    });
  }
}
