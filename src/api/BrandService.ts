import { useFetch } from "src/hooks/useFetch";
import { useFormData } from "src/hooks";
import { Brand, BrandDTO, ISearchQuery } from "src/types";

export class BrandService {
  static fetchAll(query?: ISearchQuery) {
    return useFetch<Brand[]>(query?.link ?? "/brand/list", {
      type: "GET",
      withPagination: true,
    });
  }

  static addNew(data: BrandDTO, dependes: number) {
    const { formData } = useFormData(data);
    return useFetch("/brand/add-new", {
      type: "POST",
      dependes,
      data: formData,
    });
  }
}
