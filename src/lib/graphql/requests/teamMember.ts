import { client } from '@/lib/graphql/client';
import { getSdk, Locale } from '@/lib/graphql/sdk';

const sdk = getSdk(client);

export async function getTeamMember(locale: Locale) {
  const { teamMember } = await sdk.TeamMember({ name: 'Maciej', locale });

  return teamMember;
}

export async function getTeamMemberFooter(locale: Locale) {
  const { teamMember } = await sdk.TeamMemberFooter({ name: 'Maciej', locale });

  return teamMember;
}
