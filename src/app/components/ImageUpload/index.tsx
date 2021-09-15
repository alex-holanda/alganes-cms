import { ChangeEvent, useEffect, useState } from "react";

import Icon from "@mdi/react";
import { mdiDelete, mdiUpload } from "@mdi/js";

import * as IU from "./styles";
import Loading from "../Loading";

import { FileService } from "alex-holanda-sdk";

interface ImageUploadProps {
  label: string;
  onImageUpload: (imageUrl: string) => any;
  preview?: string;
}

export function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);

  const [uploadingImage, setUploadingImage] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", async (e) => {
        try {
          setUploadingImage(true);
          setFilePreview(String(e.target?.result));

          const imageUrl = await FileService.upload(file);
          props.onImageUpload(imageUrl);
        } finally {
          setUploadingImage(false);
        }
      });

      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    setFilePreview(props.preview);
  }, [props.preview]);

  if (filePreview) {
    return (
      <IU.ImagePreviewWrapper>
        <Loading show={uploadingImage} />
        <IU.ImagePreview preview={filePreview}>
          <IU.ButtonWrapper
            onClick={() => {
              setFilePreview(undefined);
              props.onImageUpload("");
            }}
          >
            <span>Remover Imagem</span>
            <Icon size={"24px"} path={mdiDelete} />
          </IU.ButtonWrapper>
        </IU.ImagePreview>
      </IU.ImagePreviewWrapper>
    );
  }

  return (
    <IU.Wrapper>
      <IU.Label>
        <Icon size={"24px"} path={mdiUpload} />
        {props.label}
        <IU.Input type="file" onChange={handleChange} />
      </IU.Label>
    </IU.Wrapper>
  );
}
