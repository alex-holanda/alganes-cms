import { TableInstance } from "react-table";

import * as T from "./styles";

interface TableProps<T extends Object> {
  instance: TableInstance<T>;
}

export function Table<T extends Object>({ instance }: TableProps<T>) {
  // const tableInstance = useTable<>({ data, columns });

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
  } = instance;

  return (
    <T.Wrapper {...getTableProps()} cellPadding="0" cellSpacing="0">
      <T.Heading>
        {headerGroups.map((headerGroup) => (
          <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <T.HeadingCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </T.HeadingCell>
            ))}
          </T.HeadingRow>
        ))}
      </T.Heading>

      <T.Body {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <T.BodyRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <T.BodyCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </T.BodyCell>
                );
              })}
            </T.BodyRow>
          );
        })}
      </T.Body>
    </T.Wrapper>
  );
}
