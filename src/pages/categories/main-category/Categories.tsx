import { Card, Table } from "src/components";
import CategoryForm from "./CategoryForm";
import { CategoryService } from "src/api/CategoryService";
import { Category, ColumnDef } from "src/types";
import { useMemo } from "react";

const Categories: React.FC = () => {
  const { data, pagination, loading, error } = CategoryService.fetchAll();

  console.log({ data, pagination, loading, error });
  const cols = useMemo<ColumnDef<Category>[]>(
    () => [
      {
        header: "NAME",
        accessorFn: (row) => row.name,
      },
      {
        header: "SLUG",
        accessorFn: (row) => row.slug,
      },
      {
        header: "ICON",
        accessorFn: (row) => row.icon,
      },
      {
        header: "STATUS",
        accessorFn: (row) => row.home_status,
      },
      {
        header: "ACTION",
        id: "action",
      },
    ],
    []
  );
  return (
    <>
      <CategoryForm />
      <Card>
        <Table
          columns={cols}
          data={data ?? []}
          onSearch={(query) => {}}
          pagination={pagination}
        ></Table>
      </Card>
    </>
  );
};

export default Categories;
