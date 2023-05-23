import { useMemo } from "react";
import { BrandService } from "src/api";
import { Card, Table } from "src/components";
import { ColumnDef, Brand } from "src/types";

const Brands: React.FC = () => {
  const { loading, error, data, pagination } = BrandService.fetchAll();
  console.log({ loading, error, data, pagination })
  const cols = useMemo<ColumnDef<Brand>[]>(
    () => [
      {
        header: "#",
        accessorFn: (row) => row.id,
      },
      {
        header: "NAME",
        accessorFn: (row) => row.name,
      },
      {
        header: "Image",
        accessorFn: (row) => row.image,
      },
      {
        header: "ACTION",
        id: "action",
      },
    ],
    []
  );
  return (
    <Card>
      <Table
        columns={cols}
        data={data ?? []}
        onSearch={(_) => {}}
        pagination={pagination}
      />
    </Card>
  );
};

export default Brands;
