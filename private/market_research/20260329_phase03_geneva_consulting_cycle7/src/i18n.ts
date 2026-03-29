import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from './navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  const messages = locale === 'fr' 
    ? (await import('./messages/fr.json')).default 
    : (await import('./messages/en.json')).default;

  return {
    locale,
    messages
  };
});
