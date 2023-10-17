import { TemplateEmail, TemplateEmailInt } from '@/shared/components/Emails/TemplateEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_EMAILS_KEY);

export async function POST(senders: string[], dataEmails: TemplateEmailInt) {
    const sendersList: string[] = [...senders, "admin@beyondvalencia.com", "develop@beyondvalencia.com"]
    
    try {
        const data = await resend.emails.send({
            from: 'BeyondValencia <admin@beyondvalencia.com>',
            to: sendersList,
            subject: 'Book',
            react: TemplateEmail(dataEmails),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}