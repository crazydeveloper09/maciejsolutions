'use server';

import { getTranslations } from 'next-intl/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendSupportEmail(formData: FormData) {
  const t = await getTranslations('sendSupportEmail');
  try {
    const data = {
      topic: formData.get('topic') as string,
      message: formData.get('message') as string,
      email: formData.get('email') as string,
      name: formData.get('name') as string,
    };

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `Nowa prośba o kontakt`,
      html: `
      <h2>Nowa prośba o kontakt</h2>
      <p><strong>Temat:</strong> ${data.topic}</p>
      <p><strong>Imię:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Wiadomość:</strong> ${data.message}</p>
    `,
    });
    return { success: true };
  } catch (error) {
    console.error(t('errorTitle'), error);
    return {
      success: false,
      error: t('errorDescription'),
    };
  }
}
