import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/de';

addLocaleData(localeData);

const messages = {
  "dummy-component-engine.dummy-component-application": "Erfolg.",
  "dummy-component-engine.dummy-component-application-failed-to-load": "Fehler. Ladevorgang fehlgeschlagen.",
  "dummy-component-engine.no-dummy-component-application": "Nicht verfügbar.",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'de',
  messages,
};