import { ReactNode } from "react";
import { confirmAlert } from "react-confirm-alert";

interface ModalProps {
  children: ReactNode;
}

export function modal(props: ModalProps) {
  setTimeout(() => {
    confirmAlert({
      overlayClassName: "info-overlay",
      customUI: () => {
        return props.children;
      },
    });
  }, 0);
}
