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
    font2: 'Open_Sans',
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
    font1: 'Poppins',
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
    font1: 'Caveat',
    font2: 'Patrick_Hand',
    preview: '📝',
  },
];
