import Table from "./Table";
import Pagination from "./pagination/Pagination";
import { useEffect, useState } from "react";
import { PaginationProps } from "./pagination/Pagination.type";
import { TableProps } from "./Table.type";
import TextField from "../textfield/Textfield";
import ShowItems from "./show-items/ShowItems";
import { ISearchQuery } from "src/types";

type ITableProps<T extends Object> = {
  onSearch(query: ISearchQuery): void;
  pagination?: PaginationProps;
} & TableProps<T>;
//  & Omit<PaginationProps, "">;

const TableNew = <T extends Object>({
  data,
  columns,
  onSearch,
  pagination,
}: ITableProps<T>) => {
  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({
    order: undefined,
    column: undefined,
    length: 10,
    query: undefined,
    link: undefined,
  });

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div className="w-full">
      <div className="flex justify-between flex-wrap gap-2">
        <ShowItems
          onSelect={(value) =>
            setSearchQuery((prevQuery) => ({
              ...prevQuery,
              length: value,
            }))
          }
        />
        <TextField
          size="sm"
          placeholder="search"
          onChange={(value) =>
            setSearchQuery((prevQuery) => ({
              ...prevQuery,
              query: { search_query: value },
            }))
          }
        />
      </div>
      <Table data={data} columns={columns} />
      {pagination && (
        <Pagination
          {...pagination}
          onLinkClicked={(link) => {
            setSearchQuery((prevQuery) => ({ ...prevQuery, link }));
          }}
        />
      )}
    </div>
  );
};

export default TableNew;
