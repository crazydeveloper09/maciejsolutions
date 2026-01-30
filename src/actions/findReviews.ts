'use server';

import Review, { Review as IReview } from '@/lib/db/models/Review';
import { connectToDatabase } from '@/lib/db/mongo';
import { getTranslations } from 'next-intl/server';

console.log(process.env.NEXT_RUNTIME);

export async function findReviews(projectSlug: string) {
  const t = await getTranslations('findReviews');
  try {
    await connectToDatabase();
    const reviews = await Review.find<IReview>({ projectSlug }).exec();

    return { success: true, reviews };
  } catch (error) {
    console.error(t('errorTitle'), error);
    return {
      success: false,
      error: t('errorDescription'),
    };
  }
}
