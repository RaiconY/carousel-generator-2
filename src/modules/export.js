const MIME_TYPES = {
  png: "image/png",
  jpeg: "image/jpeg",
  webp: "image/webp",
};

class ExportModule {
  async toBlob(canvas, format = "png", quality = 1) {
    if (!canvas) {
      throw new Error("Canvas element is required to export");
    }

    const mimeType = MIME_TYPES[format] || MIME_TYPES.png;

    return await new Promise((resolve, reject) => {
      if (typeof canvas.toBlob !== "function") {
        try {
          const dataUrl = canvas.toDataURL(mimeType, quality);
          const byteString = atob(dataUrl.split(",")[1]);
          const arrayBuffer = new ArrayBuffer(byteString.length);
          const intArray = new Uint8Array(arrayBuffer);

          for (let i = 0; i < byteString.length; i += 1) {
            intArray[i] = byteString.charCodeAt(i);
          }

          resolve(new Blob([intArray], { type: mimeType }));
        } catch (err) {
          reject(err);
        }
        return;
      }

      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Failed to convert canvas to Blob"));
          return;
        }
        resolve(blob);
      }, mimeType, quality);
    });
  }

  async download(canvas, filename, options = {}) {
    const { format = "png", quality = 1 } = options;

    try {
      const blob = await this.toBlob(canvas, format, quality);
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.download = filename;
      link.href = url;
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 100);

      return { success: true };
    } catch (error) {
      return { success: false, error: error instanceof Error ? error.message : String(error) };
    }
  }
}

const exporter = new ExportModule();

export default exporter;
export { ExportModule };
