import { ColumnDef } from "@tanstack/react-table";

export { ColumnDef };

export type ISearchQuery = {
  order?: string;
  column?: string;
  length?: number;
  query?: Record<string, any>;
  link?: string;
};

export * from "./Order";
export * from "./Brand";
export * from "./Product";
export * from "./Category";

export * from "./dto";
