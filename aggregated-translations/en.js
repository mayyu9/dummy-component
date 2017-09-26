import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';

addLocaleData(localeData);

const messages = {
  "dummy-component-engine.dummy-component-application": "Success.",
  "dummy-component-engine.dummy-component-application-failed-to-load": "Error! Failed to load.",
  "dummy-component-engine.no-dummy-component-application": "Not available.",
  "Terra.ajax.error": "This content failed to load."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'en',
  messages,
};