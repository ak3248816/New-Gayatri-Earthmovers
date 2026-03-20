import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  // In next-intl@4, requestLocale is a promise
  const locale = await requestLocale;
  const currentLocale = locale || 'en';
  
  return {
    locale: currentLocale,
    messages: (await import(`../../messages/${currentLocale}.json`)).default
  };
});
