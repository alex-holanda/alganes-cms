import { useMemo } from "react";

import { useTable, Column } from "react-table";

import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

import * as T from "./styles";

type Data = {
  preview: React.ReactNode;
  col1: string;
  col2: string;
  actions: string;
};

interface TableProps {}

export function Table(props: TableProps) {
  const data = useMemo<Data[]>(
    () => [
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
        col1: "Hello",
        col2: "World",
        actions: "Ações",
      },
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
        col1: "react-table",
        col2: "rocks",
        actions: "Ações",
      },
      {
        preview: <Icon path={mdiOpenInNew} size="14px" color="#09f" />,
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
        Header: "",
        accessor: "preview",
      },
      {
        Header: "Column 1",
        accessor: "col1",
        width: 320,
        Cell: (row) => <div style={{ textAlign: "right" }}>{row.value}</div>,
      },
      {
        Header: "Column 2",
        accessor: "col2",
        Cell: (row) => <div style={{ textAlign: "center" }}>{row.value}</div>,
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
