import { addLocaleData } from 'react-intl';
import { DEFAULT_LOCALE } from '../action/actionTypes';

import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);

export const appLocales = [
    'en',
    'zh',
];

import enTranslationMessages from '../i18n/locales/en/en.json';
import zhTranslationMessages from '../i18n/locales/zh-CN/zh.json';

export const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, zhTranslationMessages) : {};
    const formattedMessages = {};
    const messageKeys = Object.keys(messages);
    for (const messageKey of messageKeys) {
        if (locale === DEFAULT_LOCALE) {
            formattedMessages[messageKey] = messages[messageKey];
        } else {
            formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
        }
    }

    return formattedMessages;
};

export const translationMessages = {
    en: formatTranslationMessages('en', enTranslationMessages),
    zh: formatTranslationMessages('zh', zhTranslationMessages),
};
