let getContentType = ext => {
  switch(ext) {
    case ".html":
    case ".htm":
    case ".djs": // Special dinamic file.
      return "text/html";

    case ".js":
      return "text/javascript";

    case ".legacyjs":
      return "application/javascript";

    case ".css":
      return "text/css";

    case ".txt":
      return "text/plain";

    case ".png":
      return "image/png";

    case ".jpg":
    case ".jpeg":
    case ".jfif":
    case ".pjpeg":
    case ".pjp":
      return "image/jpg";

    case ".svg":
      return "image/svg+xml";

    case ".apng":
      return "image/apng";

    case ".bmp":
      return "image/bmp";

    case ".gif":
      return "image/gif";

    case ".ico":
      return "image/x-icon";

    case ".tif":
    case ".tiff":
      return "image/tiff";

    case ".webp":
      return "image/webp";

    case ".csv":
      return "text/csv";

    case ".mp4":
      return "video/mp4";



    default:
      return "application/octet-stream";
  }
};

export default getContentType;
