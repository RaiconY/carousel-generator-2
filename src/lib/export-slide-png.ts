import { toPng } from "html-to-image";

/**
 * Filter function to exclude elements that should not be exported
 * Excludes: add element buttons, hover effects, dialogs, etc.
 */
function shouldExportNode(node: HTMLElement): boolean {
  // Exclude add element buttons
  if (node.id && node.id.startsWith("add-element-")) {
    return false;
  }

  // Exclude any dialogs or popovers that might be open
  if (node.getAttribute("role") === "dialog") {
    return false;
  }

  // Exclude buttons with dashed borders (add buttons)
  if (node.classList && node.classList.contains("border-dashed")) {
    return false;
  }

  return true;
}

export async function exportSlideToPng(
  slideIndex: number,
  slideElement: HTMLElement
): Promise<void> {
  try {
    // Generate PNG data URL
    const dataUrl = await toPng(slideElement, {
      quality: 1.0,
      pixelRatio: 2, // Higher quality for retina displays
      filter: shouldExportNode,
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
      filter: shouldExportNode,
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
