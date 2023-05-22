import { useMemo } from "react";
import { ProductService } from "src/api";
import { Card, Switch, Table } from "src/components";
import { ColumnDef, Product } from "src/types";

const Products: React.FC = () => {
  const { data, pagination, loading, error } = ProductService.fetchAll();

  console.log({ data, pagination, loading, error });
  const cols = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        header: "SL#",
        accessorFn: (row) => row.id,
      },
      {
        header: "PRODUCT NAME",
        accessorFn: (row) => row.name,
      },
      {
        header: "PURCHASE PRICE",
        accessorFn: (row) => row.purchase_price,
      },
      {
        header: "SELLING PRICE",
        accessorFn: (row) => row.unit_price,
      },
      {
        header: "FEATURED",
        accessorFn: (row) => row.featured_status,
        cell: (row) => (
          <div>
            <Switch name="select" value={row.getValue() as any} />
          </div>
        ),
      },
      {
        header: "STATUS",
        accessorFn: (row) => row.status,
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

export default Products;
