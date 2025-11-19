import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, car, service, date, time, message } = body;

        // Email content
        const emailContent = {
            to: 'kontakt@eliasscho.de',
            subject: `Neue Terminanfrage: ${service} - ${car}`,
            text: `
Neue Terminanfrage über die Website:

Name: ${name}
E-Mail: ${email}
Telefon: ${phone}
Fahrzeug: ${car}
Service: ${service}
Wunschdatum: ${date}
Uhrzeit: ${time || 'Keine Angabe'}

Nachricht:
${message || 'Keine Nachricht'}

---
Diese Anfrage wurde über das Kontaktformular auf zero-g-performance.de gesendet.
      `.trim()
        };

        // Using Resend API (you'll need to install: npm install resend)
        // For now, we'll use a simple fetch to a serverless function
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'ZERO-G Performance <noreply@zero-g-performance.de>',
                to: emailContent.to,
                subject: emailContent.subject,
                text: emailContent.text,
                reply_to: email, // Customer's email for easy reply
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return NextResponse.json({ success: true, message: 'E-Mail erfolgreich versendet!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { success: false, message: 'Fehler beim Versenden der E-Mail.' },
            { status: 500 }
        );
    }
}
