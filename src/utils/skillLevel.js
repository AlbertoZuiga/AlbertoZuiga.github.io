const LEVEL_PERCENT = {
  Básico: 25,
  "Básico-Intermedio": 40,
  Intermedio: 55,
  "Intermedio-Avanzado": 75,
  Avanzado: 90,
  Nativo: 100,
};

export const levelToPercent = (level) => LEVEL_PERCENT[level] ?? 0;
