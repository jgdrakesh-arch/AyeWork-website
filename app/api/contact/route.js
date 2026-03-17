import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, organization, email, interest, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields.' }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'contact@ayework.ca';
    const from = process.env.CONTACT_FROM_EMAIL;

    if (resendKey && from) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from,
        to,
        reply_to: email,
        subject: `New AyeWork demo request from ${name}`,
        text: [
          `Name: ${name}`,
          `Organization: ${organization || 'N/A'}`,
          `Email: ${email}`,
          `Interest: ${interest || 'N/A'}`,
          '',
          'Message:',
          message,
        ].join('\n'),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: 'Unable to process request.' }, { status: 500 });
  }
}
