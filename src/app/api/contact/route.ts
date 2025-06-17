// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, industry, message } = body;

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "abc",
        email: "mannaarindam467@gmail.com",
      },
      to: [{ email: "arindam@markobrando.com" }],
      subject: "New Contact Form Submission",
      htmlContent: `
        <h3>Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    }),
  });

  if (!brevoRes.ok) {
    const err = await brevoRes.text();
    console.error("Brevo API Error:", err);
    return NextResponse.json({ error: "Failed to send mail" }, { status: 500 });
  }
  console.log(brevoRes);

  return NextResponse.json({ success: true });
}
