import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Navn, e-post og melding er påkrevd." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Befaro Nettside <onboarding@resend.dev>",
      to: "erik@attentio.no",
      replyTo: email,
      subject: `Ny henvendelse fra ${name} – Befaro`,
      html: `
        <h2>Ny henvendelse fra befaro.no</h2>
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Ikke oppgitt"}</p>
        <hr />
        <p><strong>Melding:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Kunne ikke sende melding. Prøv igjen senere." },
      { status: 500 }
    );
  }
}
