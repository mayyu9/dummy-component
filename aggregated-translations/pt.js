import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/pt';

addLocaleData(localeData);

const messages = {
  "dummy-component-engine.dummy-component-application": "Sucesso",
  "dummy-component-engine.dummy-component-application-failed-to-load": "Erro! Falha ao carregar.",
  "dummy-component-engine.no-dummy-component-application": "Nãs disponível",
  "Terra.ajax.error": "Falha ao carregar conteúdo."
};

module.exports = {
  areTranslationsLoaded: true,
  locale: 'pt',
  messages,
};