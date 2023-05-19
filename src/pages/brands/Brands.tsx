import { useMemo } from "react";
import { Card, Table } from "src/components";
import { ColumnDef, Brand } from "src/types";

const Brands: React.FC = () => {
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
      <Table columns={cols} data={[]} onSearch={(query) => {}} />
    </Card>
  );
};

export default Brands;
