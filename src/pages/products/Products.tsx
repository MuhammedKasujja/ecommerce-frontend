import { useMemo } from "react";
import { Card, Table } from "src/components";
import { ColumnDef, Product } from "src/types";

const Products: React.FC = () => {
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
        accessorFn: (row) => row.selling_price,
      },
      {
        header: "FEATURED",
        accessorFn: (row) => row.featured,
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
        <Table columns={cols} data={[]} onSearch={(query) => {}}></Table>
      </Card>
    </>
  );
};

export default Products;
