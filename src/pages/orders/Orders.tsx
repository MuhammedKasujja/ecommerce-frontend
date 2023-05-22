import { Card, Table } from "src/components";
import { Order, ColumnDef } from "src/types";
import { useMemo } from "react";
import { OrderService } from "src/api";

const Orders: React.FC = () => {
  const { data, pagination, loading, error } = OrderService.fetchAll();

  console.log({ data, pagination, loading, error });
  const cols = useMemo<ColumnDef<Order>[]>(
    () => [
      {
        header: "SL#",
        accessorFn: (row) => row.id,
      },
      {
        header: "ORDER",
        accessorFn: (row) => row.description,
      },
      {
        header: "DATE",
        accessorFn: (row) => row.date,
      },
      {
        header: "CUSTOMER NAME",
        accessorFn: (row) => row.customer,
      },
      {
        header: "STATUS",
        accessorFn: (row) => row.state,
      },
      {
        header: "TOTAL",
        accessorFn: (row) => row.total,
      },
      {
        header: "ORDER STATUS",
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

export default Orders;
