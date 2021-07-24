import { useMemo } from "react";
import { useTable, Column } from "react-table";

type Data = {
  col1: string;
  col2: string;
  actions: string;
};

interface TableProps {}

export function Table(props: TableProps) {
  const data = useMemo<Data[]>(
    () => [
      {
        col1: "Hello",
        col2: "World",
        actions: "Ações",
      },
      {
        col1: "react-table",
        col2: "rocks",
        actions: "Ações",
      },
      {
        col1: "whatever",
        col2: "you want",
        actions: "Ações",
      },
    ],
    []
  );

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: "Column 1",
        accessor: "col1",
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Ações",
        accessor: "actions",
      },
    ],
    []
  );

  const tableInstance = useTable<Data>({ data, columns });

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
