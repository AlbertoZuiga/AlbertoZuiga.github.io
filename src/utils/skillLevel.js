// Claves de skills.levels.* en src/i18n/*.json
const LEVEL_PERCENT = {
  basic: 25,
  "basic-intermediate": 40,
  intermediate: 55,
  "intermediate-advanced": 75,
  advanced: 90,
  native: 100,
};

export const levelToPercent = (level) => LEVEL_PERCENT[level] ?? 0;
