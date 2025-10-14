// Предзаготовленные паттерны и градиенты для фона каруселей

export type BackgroundPattern = {
  name: string;
  type: 'gradient' | 'pattern' | 'color';
  value: string; // CSS gradient или URL паттерна
  textColor: string; // Рекомендуемый цвет текста
  preview?: string; // Превью для UI
};

export const backgroundPatterns: Record<string, BackgroundPattern> = {
  // Дизайн 1: Синий градиент со звездами (как на первой картинке)
  starryNight: {
    name: 'Starry Night',
    type: 'gradient',
    value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    textColor: '#ffffff',
    preview: '🌟',
  },

  // Дизайн 2: Фиолетовый с волнами (как на второй картинке)
  purpleWaves: {
    name: 'Purple Waves',
    type: 'gradient',
    value: 'linear-gradient(135deg, #5B42F3 0%, #00DDEB 100%)',
    textColor: '#ffffff',
    preview: '🌊',
  },

  // Дизайн 3: Бежевая тетрадь (как на третьей картинке)
  notebookPaper: {
    name: 'Notebook Paper',
    type: 'pattern',
    value: '#F5F1E8',
    textColor: '#2d2d2d',
    preview: '📝',
  },

  // Дополнительные градиенты
  sunsetGlow: {
    name: 'Sunset Glow',
    type: 'gradient',
    value: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)',
    textColor: '#ffffff',
    preview: '🌅',
  },

  oceanBreeze: {
    name: 'Ocean Breeze',
    type: 'gradient',
    value: 'linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)',
    textColor: '#ffffff',
    preview: '🌊',
  },

  forestDream: {
    name: 'Forest Dream',
    type: 'gradient',
    value: 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)',
    textColor: '#ffffff',
    preview: '🌲',
  },

  pinkCloud: {
    name: 'Pink Cloud',
    type: 'gradient',
    value: 'linear-gradient(135deg, #FE6B8B 30%, #FF8E53 90%)',
    textColor: '#ffffff',
    preview: '☁️',
  },

  darkMode: {
    name: 'Dark Mode',
    type: 'gradient',
    value: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
    textColor: '#ffffff',
    preview: '🌙',
  },

  mintFresh: {
    name: 'Mint Fresh',
    type: 'gradient',
    value: 'linear-gradient(135deg, #A8E6CF 0%, #3EECAC 100%)',
    textColor: '#2d2d2d',
    preview: '🍃',
  },

  royal: {
    name: 'Royal',
    type: 'gradient',
    value: 'linear-gradient(135deg, #141E30 0%, #243B55 100%)',
    textColor: '#ffffff',
    preview: '👑',
  },
};

// CSS паттерны для наложения (опционально)
export const overlayPatterns = {
  stars: {
    name: 'Stars',
    svg: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='white' opacity='0.3'/%3E%3Ccircle cx='60' cy='40' r='1.5' fill='white' opacity='0.4'/%3E%3Ccircle cx='80' cy='70' r='2.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='30' cy='80' r='1' fill='white' opacity='0.5'/%3E%3Ccircle cx='90' cy='30' r='1.8' fill='white' opacity='0.3'/%3E%3C/svg%3E`,
  },
  waves: {
    name: 'Waves',
    svg: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30, 50 50 T 100 50' stroke='white' stroke-width='1' fill='none' opacity='0.2'/%3E%3Cpath d='M0 70 Q 25 50, 50 70 T 100 70' stroke='white' stroke-width='1' fill='none' opacity='0.15'/%3E%3C/svg%3E`,
  },
  grid: {
    name: 'Grid',
    svg: `data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 L 0 20 M 0 0 L 20 0' stroke='%23d4d4d4' stroke-width='0.5' fill='none'/%3E%3C/svg%3E`,
  },
  dots: {
    name: 'Dots',
    svg: `data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23000' opacity='0.1'/%3E%3C/svg%3E`,
  },
  triangles: {
    name: 'Triangles',
    svg: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='15,10 20,20 10,20' fill='white' opacity='0.15'/%3E%3Cpolygon points='70,30 80,50 60,50' fill='white' opacity='0.1'/%3E%3Cpolygon points='40,70 50,85 30,85' fill='white' opacity='0.2'/%3E%3Cpolygon points='85,15 90,25 80,25' fill='white' opacity='0.12'/%3E%3C/svg%3E`,
  },
  diagonalLines: {
    name: 'Diagonal Lines',
    svg: `data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='40' y2='40' stroke='white' stroke-width='1' opacity='0.1'/%3E%3Cline x1='0' y1='20' x2='20' y2='40' stroke='white' stroke-width='1' opacity='0.1'/%3E%3Cline x1='20' y1='0' x2='40' y2='20' stroke='white' stroke-width='1' opacity='0.1'/%3E%3C/svg%3E`,
  },
  circles: {
    name: 'Circles',
    svg: `data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='8' stroke='white' stroke-width='1' fill='none' opacity='0.15'/%3E%3Ccircle cx='60' cy='40' r='12' stroke='white' stroke-width='1' fill='none' opacity='0.1'/%3E%3Ccircle cx='30' cy='65' r='6' stroke='white' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E`,
  },
  hexagons: {
    name: 'Hexagons',
    svg: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='30,10 40,5 50,10 50,20 40,25 30,20' stroke='white' stroke-width='1' fill='none' opacity='0.15'/%3E%3Cpolygon points='65,45 75,40 85,45 85,55 75,60 65,55' stroke='white' stroke-width='1' fill='none' opacity='0.12'/%3E%3C/svg%3E`,
  },
  crosshatch: {
    name: 'Crosshatch',
    svg: `data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='0' x2='30' y2='30' stroke='white' stroke-width='0.5' opacity='0.15'/%3E%3Cline x1='30' y1='0' x2='0' y2='30' stroke='white' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E`,
  },
  abstractLines: {
    name: 'Abstract Lines',
    svg: `data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10,60 Q40,20 70,60 T130,60' stroke='white' stroke-width='2' fill='none' opacity='0.1'/%3E%3Cpath d='M-10,80 Q20,100 50,80 T110,80' stroke='white' stroke-width='1.5' fill='none' opacity='0.15'/%3E%3Cline x1='30' y1='10' x2='35' y2='40' stroke='white' stroke-width='1' opacity='0.12'/%3E%3Cline x1='90' y1='20' x2='85' y2='50' stroke='white' stroke-width='1' opacity='0.12'/%3E%3C/svg%3E`,
  },
  geometricMix: {
    name: 'Geometric Mix',
    svg: `data:image/svg+xml,%3Csvg width='150' height='150' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='15' stroke='white' stroke-width='1' fill='none' opacity='0.12'/%3E%3Cpolygon points='100,20 110,40 90,40' fill='white' opacity='0.1'/%3E%3Crect x='50' y='80' width='20' height='20' stroke='white' stroke-width='1' fill='none' opacity='0.15'/%3E%3Cline x1='10' y1='100' x2='40' y2='130' stroke='white' stroke-width='1.5' opacity='0.1'/%3E%3Ccircle cx='120' cy='110' r='8' fill='white' opacity='0.08'/%3E%3C/svg%3E`,
  },
  dotGrid: {
    name: 'Dot Grid',
    svg: `data:image/svg+xml,%3Csvg width='30' height='30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='15' cy='5' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='25' cy='5' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='5' cy='15' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='15' cy='15' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='25' cy='15' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='5' cy='25' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='15' cy='25' r='1.5' fill='white' opacity='0.2'/%3E%3Ccircle cx='25' cy='25' r='1.5' fill='white' opacity='0.2'/%3E%3C/svg%3E`,
  },
  sparkles: {
    name: 'Sparkles',
    svg: `data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 L22,25 L20,30 L18,25 Z' fill='white' opacity='0.3'/%3E%3Cpath d='M70,40 L73,47 L70,54 L67,47 Z' fill='white' opacity='0.25'/%3E%3Cpath d='M40,70 L42,75 L40,80 L38,75 Z' fill='white' opacity='0.2'/%3E%3Cpath d='M85,15 L87,20 L85,25 L83,20 Z' fill='white' opacity='0.35'/%3E%3Ccircle cx='50' cy='30' r='1' fill='white' opacity='0.4'/%3E%3Ccircle cx='25' cy='60' r='1.5' fill='white' opacity='0.3'/%3E%3C/svg%3E`,
  },
};

// Полные предзаготовленные дизайны
export type DesignTemplate = {
  id: string;
  name: string;
  description: string;
  backgroundPattern: string;
  overlayPattern?: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  font1: string;
  font2: string;
  preview: string;
};

export const designTemplates: DesignTemplate[] = [
  {
    id: 'starry-night-blue',
    name: 'Starry Night',
    description: 'Синий градиент со звездами для технических и обучающих постов',
    backgroundPattern: 'starryNight',
    overlayPattern: 'stars',
    primaryColor: '#ffffff',
    secondaryColor: '#e0e0e0',
    textColor: '#ffffff',
    font1: 'Montserrat',
    font2: 'DM_Sans',
    preview: '🌟',
  },
  {
    id: 'purple-waves-modern',
    name: 'Purple Waves',
    description: 'Современный фиолетовый дизайн с волнистыми линиями',
    backgroundPattern: 'purpleWaves',
    overlayPattern: 'waves',
    primaryColor: '#ffffff',
    secondaryColor: '#f0f0f0',
    textColor: '#ffffff',
    font1: 'Syne',
    font2: 'Inter',
    preview: '🌊',
  },
  {
    id: 'notebook-minimalist',
    name: 'Notebook Style',
    description: 'Минималистичный стиль тетради для образовательного контента',
    backgroundPattern: 'notebookPaper',
    overlayPattern: 'grid',
    primaryColor: '#2d2d2d',
    secondaryColor: '#4a4a4a',
    textColor: '#2d2d2d',
    font1: 'DM_Serif_Display',
    font2: 'DM_Sans',
    preview: '📝',
  },
  {
    id: 'sunset-triangles',
    name: 'Sunset Triangles',
    description: 'Теплый закатный градиент с геометрическими треугольниками',
    backgroundPattern: 'sunsetGlow',
    overlayPattern: 'triangles',
    primaryColor: '#ffffff',
    secondaryColor: '#fff8dc',
    textColor: '#ffffff',
    font1: 'Montserrat',
    font2: 'DM_Sans',
    preview: '🔺',
  },
  {
    id: 'ocean-circles',
    name: 'Ocean Circles',
    description: 'Океанский градиент с абстрактными кругами',
    backgroundPattern: 'oceanBreeze',
    overlayPattern: 'circles',
    primaryColor: '#ffffff',
    secondaryColor: '#e0f7ff',
    textColor: '#ffffff',
    font1: 'Inter',
    font2: 'Roboto',
    preview: '⭕',
  },
  {
    id: 'forest-hexagons',
    name: 'Forest Hexagons',
    description: 'Лесной градиент с шестиугольниками',
    backgroundPattern: 'forestDream',
    overlayPattern: 'hexagons',
    primaryColor: '#ffffff',
    secondaryColor: '#d4f1d4',
    textColor: '#ffffff',
    font1: 'Roboto',
    font2: 'DM_Sans',
    preview: '⬡',
  },
  {
    id: 'pink-sparkles',
    name: 'Pink Sparkles',
    description: 'Розовый градиент с искрящимися элементами',
    backgroundPattern: 'pinkCloud',
    overlayPattern: 'sparkles',
    primaryColor: '#ffffff',
    secondaryColor: '#ffe0e0',
    textColor: '#ffffff',
    font1: 'Syne',
    font2: 'Inter',
    preview: '✨',
  },
  {
    id: 'dark-geometric',
    name: 'Dark Geometric',
    description: 'Темный фон с геометрическими элементами',
    backgroundPattern: 'darkMode',
    overlayPattern: 'geometricMix',
    primaryColor: '#ffffff',
    secondaryColor: '#cccccc',
    textColor: '#ffffff',
    font1: 'Inter',
    font2: 'Roboto',
    preview: '◼️',
  },
  {
    id: 'mint-dotgrid',
    name: 'Mint Dot Grid',
    description: 'Свежий мятный фон с сеткой точек',
    backgroundPattern: 'mintFresh',
    overlayPattern: 'dotGrid',
    primaryColor: '#2d2d2d',
    secondaryColor: '#1a1a1a',
    textColor: '#2d2d2d',
    font1: 'Montserrat',
    font2: 'DM_Sans',
    preview: '⚬',
  },
  {
    id: 'royal-abstract',
    name: 'Royal Abstract',
    description: 'Королевский градиент с абстрактными линиями',
    backgroundPattern: 'royal',
    overlayPattern: 'abstractLines',
    primaryColor: '#ffffff',
    secondaryColor: '#b8c6db',
    textColor: '#ffffff',
    font1: 'DM_Serif_Display',
    font2: 'PT_Serif',
    preview: '〰️',
  },
];
