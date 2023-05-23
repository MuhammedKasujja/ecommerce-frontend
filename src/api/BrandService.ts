import { useFetch } from "src/hooks/useFetch";
import { Brand, BrandDTO, ISearchQuery } from "src/types";

export class BrandService {
  static fetchAll(query?: ISearchQuery) {
    console.log({query})
    return useFetch<Brand[]>(query?.link ?? "http://127.0.0.1:8000/api/admin/brand/list", {
      type: "GET",
      withPagination: true,
    });
  }

  static addNew(data: BrandDTO, dependes: number) {
    const formData = new FormData();
    for (let key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key as keyof BrandDTO]);
      }
    }
    return useFetch("http://127.0.0.1:8000/api/admin/brand/add-new", {
      type: "POST",
      dependes,
      data: formData,
    });
  }
}
