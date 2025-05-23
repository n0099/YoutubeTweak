import { createI18n } from "vue-i18n";
import en from "../assets/i18n/en.json";

export const locales = {
	zh: "简体中文",
	"zh-TW": "繁体中文",
	en: "English",
	ja: "日本語",
};

let locale = window?.navigator?.language || "zh";
if (!locales[locale] && locale.includes("-") && locales[locale.split("-")[0]]) {
	locale = locale.split("-")[0];
}

const i18n = createI18n({
	locale: locale,
	fallbackLocale: "en",
	messages: {
		en: en,
	},
});

export async function loadLocaleMessages(locale) {
	const messages = await import(`../assets/i18n/${locale}.json`);
	i18n.global.setLocaleMessage(locale, messages.default);
}
loadLocaleMessages(locale).catch();

export default i18n;
