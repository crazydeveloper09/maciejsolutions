'use server';

import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  const headersStore = await headers();
  const locale = headersStore.get('accept-language')?.startsWith('pl') ? 'pl' : 'en';

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
