'use server';

import Review from '@/lib/db/models/Review';
import { connectToDatabase } from '@/lib/db/mongo';
import { getTranslations } from 'next-intl/server';

export async function addReview(formData: FormData, projectSlug: string) {
  const t = await getTranslations('addReview');
  try {
    const data = {
      projectSlug,
      nickname: formData.get('nickname') as string,
      rating: formData.get('rating') as string,
      comment: formData.get('description') as string,
    };

    await connectToDatabase();
    await Review.create(data);

    return { success: true };
  } catch (error) {
    console.error(t('errorTitle'), error);
    return {
      success: false,
      error: t('errorDescription'),
    };
  }
}
