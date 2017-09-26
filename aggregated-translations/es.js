import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/es';

addLocaleData(localeData);

const messages = {
  "dummy-component-engine.dummy-component-application": "Éxito",
  "dummy-component-engine.dummy-component-application-failed-to-load": "Error. Error al cargar.",
  "dummy-component-engine.no-dummy-component-application": "No disponible",
  "Terra.ajax.error": "Error al cargar el contenido."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'es',
  messages,
};