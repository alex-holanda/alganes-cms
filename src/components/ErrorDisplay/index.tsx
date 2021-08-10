import { mdiAlert } from "@mdi/js";
import Icon from "@mdi/react";

interface ErrorDisplayProps {
  small?: boolean;
  title?: string;
  message?: string;
}

export function ErrorDisplay(props: ErrorDisplayProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#274060",
        gap: "9px",
      }}
    >
      <Icon path={mdiAlert} size={props.small ? "24px" : "48px"} />
      <h2 style={{ fontSize: "18px" }}>
        {props.title || "Erro ao renderizar o componente"}
      </h2>
      <p style={{ fontFamily: '"Roboto Mono", monospace', fontSize: "12px" }}>
        {props.message || "Erro desconhecido"}
      </p>
    </div>
  );
}
