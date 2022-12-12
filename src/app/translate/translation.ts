import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_RU_NAME, LANG_RU_TRANS } from './lang-ru';
import { LANG_AZ_NAME, LANG_AZ_TRANS } from './lang-az';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all translations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_RU_NAME]: LANG_RU_TRANS,
    [LANG_AZ_NAME]: LANG_AZ_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
    { provide: TRANSLATIONS, useValue: dictionary },
];
