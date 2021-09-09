import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { TableInstance } from "react-table";
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
    pageCount,
    gotoPage,
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
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={(page) => gotoPage(page.selected)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          previousLabel={<Icon path={mdiChevronLeft} size={"16px"} />}
          nextLabel={<Icon path={mdiChevronRight} size={"16px"} />}
        />
      </T.TablePagination>
    </>
  );
}
