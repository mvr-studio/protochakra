declare type Data = Record<string, string | number | boolean>;
declare type ColumnData = Data & {
    accessor: string;
};
interface DataTableProps {
    data: Data[];
    columns: ColumnData[];
}
declare const DataTable: ({ data, columns }: DataTableProps) => JSX.Element;
export default DataTable;
