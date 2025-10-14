"use client";

import { designTemplates, backgroundPatterns, overlayPatterns } from "@/lib/background-patterns";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DocumentFormReturn } from "@/lib/document-form-types";
import { useFormContext } from "react-hook-form";

export function DesignTemplateSelector() {
  const form: DocumentFormReturn = useFormContext();
  const { setValue } = form;

  const applyTemplate = (templateId: string) => {
    const template = designTemplates.find(t => t.id === templateId);
    if (!template) return;

    const bgPattern = backgroundPatterns[template.backgroundPattern];

    // Применяем все настройки из шаблона
    setValue("config.theme.background", bgPattern.value);
    setValue("config.theme.primary", template.primaryColor);
    setValue("config.theme.secondary", template.secondaryColor);
    setValue("config.theme.isCustom", true);

    // Можно также применить шрифты, если они доступны
    // setValue("config.fonts.font1", template.font1);
    // setValue("config.fonts.font2", template.font2);
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Готовые дизайны</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Выберите предзаготовленный дизайн с подложкой
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {designTemplates.map((template) => {
          const bgPattern = backgroundPatterns[template.backgroundPattern];
          const overlay = template.overlayPattern ? overlayPatterns[template.overlayPattern as keyof typeof overlayPatterns] : null;

          return (
            <Card
              key={template.id}
              className="cursor-pointer hover:ring-2 hover:ring-primary transition-all"
              onClick={() => applyTemplate(template.id)}
            >
              <CardContent className="p-4">
                <div
                  className="w-full h-32 rounded-md mb-3 relative overflow-hidden"
                  style={{
                    background: bgPattern.value,
                    backgroundImage: overlay ? `url("${overlay.svg}")` : undefined,
                    backgroundSize: overlay ? 'auto' : undefined,
                    backgroundRepeat: overlay ? 'repeat' : undefined,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">{template.preview}</span>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mb-1">{template.name}</h4>
                <p className="text-xs text-muted-foreground">{template.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Градиенты</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Или выберите отдельный градиент для фона
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(backgroundPatterns).map(([key, pattern]) => (
            <div
              key={key}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => {
                setValue("config.theme.background", pattern.value);
                setValue("config.theme.isCustom", true);
              }}
            >
              <div
                className="w-full h-20 rounded-md mb-2"
                style={{
                  background: pattern.value,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl">{pattern.preview}</span>
                </div>
              </div>
              <p className="text-xs text-center font-medium">{pattern.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
