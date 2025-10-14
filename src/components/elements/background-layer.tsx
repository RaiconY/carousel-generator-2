import React from "react";
import { cn } from "@/lib/utils";

export function BackgroundLayer({
  background,
  className = "",
  pattern,
}: {
  background: string;
  className?: string;
  pattern?: string;
}) {
  // Определяем, является ли background градиентом
  const isGradient = background.includes('gradient') || background.includes('linear') || background.includes('radial');

  return (
    <div
      style={{
        background: isGradient ? background : undefined,
        backgroundColor: !isGradient ? background : undefined,
        backgroundImage: pattern ? `url("${pattern}"), ${isGradient ? background : 'none'}` : undefined,
        backgroundSize: pattern ? 'auto, cover' : undefined,
        backgroundRepeat: pattern ? 'repeat, no-repeat' : undefined,
      }}
      className={cn(
        "w-full h-full absolute top-0 left-0 right-0 bottom-0",
        className
      )}
    ></div>
  );
}
