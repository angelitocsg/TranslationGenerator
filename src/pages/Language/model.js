var langLocal = localStorage.getItem('lang');

export const lang = langLocal !== undefined && langLocal !== null ? JSON.parse(langLocal) : [
  {
    "id": 1,
    "tag": "Enter",
    "grp": "Buttons",
    "en": "Enter",
    "pt": "Entrar",
    "es": "Entrar",
  }
]
