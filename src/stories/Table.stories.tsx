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

type Post = {
  id: number;
  title: string;
  views: number;
  author: {
    name: string;
    avatar: string;
  };
  conversions: {
    thousands: number;
    percentage: number;
  };
};

export function Default() {
  const data = useMemo<Post[]>(
    () => [
      {
        author: {
          name: "Daniel Bonifacio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 1,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: "Como dobrei meu salário aprendendo somente React",
        views: 985415,
      },
      {
        author: {
          name: "Daniel Bonifacio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 2,
        conversions: {
          percentage: 64.35,
          thousands: 607,
        },
        title: "React.js vs. React Native: a REAL diferença entre os dois",
        views: 985415,
      },
      {
        author: {
          name: "Daniel Bonifacio",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU",
        },
        id: 3,
        conversions: {
          percentage: 95.35,
          thousands: 845,
        },
        title: "Como dobrei meu salário aprendendo somente React",
        views: 985415,
      },
    ],
    []
  );

  const columns = useMemo<Column<Post>[]>(
    () => [
      {
        Header: "",
        accessor: "id",
        Cell: () => <Icon path={mdiOpenInNew} size={"14px"} color={"#09f"} />,
      },
      {
        Header: "Artigo",
        accessor: "title",
        width: 320,
        Cell: (props) => (
          <div
            style={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              width={24}
              height={24}
              src={props.row.original.author.avatar}
              alt={props.row.original.author.name}
            />
            {props.value}
          </div>
        ),
      },
      {
        Header: "Views",
        accessor: "views",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: "'Roboto mono', monospace",
              fontWeight: 700,
            }}
          >
            {props.value.toLocaleString("pt-br")}
          </div>
        ),
      },
      {
        Header: "Conversões",
        accessor: "conversions",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              display: "flex",
              gap: "8px",
              fontFamily: "'Roboto mono', monospace",
              fontWeight: 700,
            }}
          >
            <span>{props.value.thousands}K</span>
            <span style={{ color: "#09f" }}>({props.value.percentage}%)</span>
          </div>
        ),
      },
      {
        Header: "Ações",
        Cell: () => <div>todo: actions</div>,
      },
    ],
    []
  );

  const instance = useTable<Post>({ data, columns });
  return <Table<Post> instance={instance} />;
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
