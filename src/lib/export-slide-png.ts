import { toPng } from "html-to-image";

export async function exportSlideToPng(
  slideIndex: number,
  slideElement: HTMLElement
): Promise<void> {
  try {
    // Generate PNG data URL
    const dataUrl = await toPng(slideElement, {
      quality: 1.0,
      pixelRatio: 2, // Higher quality for retina displays
    });

    // Create download link
    const link = document.createElement("a");
    link.download = `slide-${slideIndex + 1}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Error exporting slide to PNG:", error);
    throw error;
  }
}

export async function copySlideToPng(
  slideElement: HTMLElement
): Promise<void> {
  try {
    // Generate PNG blob
    const dataUrl = await toPng(slideElement, {
      quality: 1.0,
      pixelRatio: 2,
    });

    // Convert data URL to blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();

    // Copy to clipboard using Clipboard API
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
    } else {
      throw new Error("Clipboard API not supported");
    }
  } catch (error) {
    console.error("Error copying slide to clipboard:", error);
    throw error;
  }
}
