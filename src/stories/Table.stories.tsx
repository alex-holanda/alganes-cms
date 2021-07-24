import { ComponentMeta } from "@storybook/react";
import { useMemo } from "react";

import { Column, useTable } from "react-table";

import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

import { Table } from "../components/Table";

export default {
  title: "Example/Table",
  component: Table,
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
} as ComponentMeta<typeof Table>;

type Data = {
  preview: React.ReactNode;
  col1: string;
  col2: string;
  actions: string;
};

export function Default() {
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
        col1: "Batata",
        col2: "Banana",
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

  const instance = useTable<Data>({ data, columns });
  return <Table<Data> instance={instance} />;
}

export function NoData() {
  const data = useMemo<Data[]>(() => [], []);

  type Data = {
    preview: React.ReactNode;
    col1: string;
    col2: string;
    actions: string;
  };

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

  const instance = useTable<Data>({ data, columns });
  return <Table<Data> instance={instance} />;
}
