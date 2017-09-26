import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/fr';

addLocaleData(localeData);

const messages = {
  "dummy-component-engine.dummy-component-application": "Succès",
  "dummy-component-engine.dummy-component-application-failed-to-load": "Erreur. Échec de chargement.",
  "dummy-component-engine.no-dummy-component-application": "Indisponible.",
  "Terra.ajax.error": "Échec du chargement du contenu."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'fr',
  messages,
};