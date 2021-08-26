import { ChangeEvent, useState } from "react";

import Icon from "@mdi/react";
import { mdiDelete, mdiUpload } from "@mdi/js";

import * as IU from "./styles";
import FileService from "../../../sdk/services/File.service";

interface ImageUploadProps {
  label: string;
  onImageUpload: (imageUrl: string) => any;
}

export function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", async (e) => {
        setFilePreview(String(e.target?.result));

        const imageUrl = await FileService.upload(file);
        props.onImageUpload(imageUrl);
      });

      reader.readAsDataURL(file);
    }
  }

  if (filePreview) {
    return (
      <IU.ImagePreviewWrapper>
        <IU.ImagePreview preview={filePreview}>
          <IU.ButtonWrapper onClick={() => setFilePreview(null)}>
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
