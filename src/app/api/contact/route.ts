import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { nome, cognome, email, telefono, messaggio } = await req.json()

    await resend.emails.send({
      from: 'Campionesi <onboarding@resend.dev>',
      to: 'info@campionesi.com',
      subject: `Nuova richiesta da ${nome} ${cognome}`,
      html: `
        <h2>Nuova richiesta di contatto</h2>
        <p><strong>Nome:</strong> ${nome} ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefono:</strong> ${telefono || 'non fornito'}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${messaggio}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Errore invio email' }, { status: 500 })
  }
}
