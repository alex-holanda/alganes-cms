import { useMemo, useEffect, useState } from "react";

import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";

import usePosts from "../../core/hooks/usePosts";

import { Column, useTable, usePagination } from "react-table";

import { Table } from "../components/Table";
import Loading from "../components/Loading";

import { format } from "date-fns";

import Skeleton from "react-loading-skeleton";

import PostPreview from "./PostPreview";
import PostTitleAnchor from "../components/PostTitleAnchor";

import { modal } from "../../core/utils/modal";

import { Post } from "alex-holanda-sdk";

export function PostsList() {
  const { fetchPosts, paginatedPosts, loading } = usePosts();
  const [error, setError] = useState<Error>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPosts({
      page,
      size: 5,
      showAll: true,
      sort: ["createdAt", "desc"],
    }).catch(setError);
  }, [page, fetchPosts]);

  if (error) {
    throw error;
  }

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: "",
        accessor: "id",
        Cell: () => (
          <div style={{ paddingLeft: 8, width: "16px" }}>
            <Icon path={mdiOpenInNew} size={"16px"} color={"#09f"} />
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "left" }}>Título</div>,
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
              src={props.row.original.editor.avatarUrls.small}
              alt={props.row.original.editor.name}
              title={props.row.original.editor.name}
            />
            <PostTitleAnchor
              title={props.value}
              href={`/posts/${props.row.original.id}`}
              onClick={(e) => {
                e.preventDefault();

                modal({
                  children: <PostPreview postId={props.row.original.id} />,
                });
              }}
            >
              {props.value}
            </PostTitleAnchor>
          </div>
        ),
      },
      {
        Header: () => <div style={{ textAlign: "right" }}>Criação</div>,
        accessor: "createdAt",
        Cell: (props) => (
          <div
            style={{
              textAlign: "right",
              fontFamily: "'Roboto mono', monospace",
            }}
          >
            {format(new Date(props.value), "dd/MM/yyyy")}
          </div>
        ),
      },
      {
        id: Math.random().toString(),
        accessor: "published",
        Header: () => <div style={{ textAlign: "right" }}>Ações</div>,
        Cell: (props) => (
          <div style={{ textAlign: "right" }}>
            {props.value ? "Publicado" : "Privado"}
          </div>
        ),
      },
    ],
    []
  );

  const instance = useTable<Post.Summary>(
    {
      data: paginatedPosts?.content || [],
      columns,
      manualPagination: true,
      initialState: {
        pageIndex: 0,
      },
      pageCount: paginatedPosts?.totalPages,
    },
    usePagination
  );

  if (!paginatedPosts) {
    return (
      <div>
        <Skeleton height={32} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    );
  }

  return (
    <>
      <Loading show={loading} />
      <Table instance={instance} onPaginate={setPage} />
    </>
  );
}
