'use server';

import Order from '@/lib/db/models/Order';
import { connectToDatabase } from '@/lib/db/mongo';
import { getTranslations } from 'next-intl/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function createOrder(formData: FormData) {
  const t = await getTranslations('createOrder');
  try {
    const data = {
      name: formData.get('name') as string,
      projectName: formData.get('projectName') as string,
      email: formData.get('email') as string,
      expectations: formData.get('projectDescription') as string,
      service: formData.get('service') as string,
      budget: formData.get('budget') as string,
      deadline: formData.get('deadline') as string,
    };

    await connectToDatabase();
    await Order.create(data);

    await resend.emails.send({
      from: 'Portfolio <admin@maciejsolutions.pl>',
      to: 'offers@maciejsolutions.pl',
      subject: `Nowe zamówienie – ${data.projectName}`,
      html: `
      <h2>Nowa oferta</h2>
      <p><strong>Imię:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Usługa:</strong> ${data.service}</p>
      <p><strong>Wiadomość:</strong> ${data.expectations}</p>
      <p><strong>Budżet:</strong> ${data.budget}</p>
      <p><strong>Termin realizacji:</strong> ${data.deadline}</p>
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
