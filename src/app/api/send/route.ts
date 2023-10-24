import Emails, { TemplateEmailInt } from '@/shared/components/Emails/Emails';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAILS_KEY);

export async function POST(senders: any, templateData: TemplateEmailInt) {
    const sendersList = [...senders, 'develop@beyondvalencia.com']
  try {
    const data = await resend.emails.send({
      from: 'BeyondValencia <admin@beyondvalencia.com>',
      to: sendersList,
      subject: 'Confirm booking www.beyondvalencia.com',
      react: Emails(templateData),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}