import { File } from "../@types";
import Service from "../Service";

class FileService extends Service {
  static getSignedUrl(fileInfo: File.UploadRequestInput) {
    return this.Http.post<File.UploadRequest>("/upload-requests", fileInfo)
      .then(this.getData)
      .then((res) => res.uploadSignedUrl);
  }
}

export default FileService;
