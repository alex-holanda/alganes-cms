import { useEffect } from "react";
import { TableInstance } from "react-table";
import { Button } from "../Button";
import { NoData } from "../NoData";

import * as T from "./styles";

interface TableProps<T extends Object> {
  instance: TableInstance<T>;
  onPaginate?: (newPage: number) => any;
}

export function Table<T extends Object>({
  instance,
  onPaginate,
}: TableProps<T>) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = instance;

  useEffect(() => {
    onPaginate && onPaginate(pageIndex);
  }, [onPaginate, pageIndex]);

  return (
    <>
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

      {!rows.length && (
        <T.WithoutData>
          <NoData height={360} />
        </T.WithoutData>
      )}

      <T.TablePagination>
        <Button
          variant="primary"
          label={"Página anterior"}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        />
        <Button
          variant="primary"
          label={"Primeira anterior"}
          onClick={previousPage}
          disabled={!canPreviousPage}
        />
        <Button
          variant="primary"
          label={"Próxima página"}
          onClick={nextPage}
          disabled={!canNextPage}
        />
        <Button
          variant="primary"
          label={"Última página"}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        />

        <span>
          Página {pageIndex + 1} de {pageOptions.length}
        </span>
      </T.TablePagination>
    </>
  );
}
