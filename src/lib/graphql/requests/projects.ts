import { client } from '@/lib/graphql/client';
import { getSdk, Locale } from '@/lib/graphql/sdk';

const sdk = getSdk(client);

export async function getProjects(locale: Locale) {
  const { projects } = await sdk.Projects({ locale });

  return projects;
}

export async function getProjectBySlug(slug: string, locale: Locale) {
  const { project } = await sdk.ProjectBySlug({ slug, locale });

  return project;
}
