import { NextResponse } from "next/server";
import * as brevo from "@getbrevo/brevo";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    );

    const sendSmtpEmail = {
      sender: {
        name: "Website Contact",
        email: "dyushchenkodev@gmail.com",
      },
      to: [
        {
          email: "dyushchenkodev@gmail.com",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: `New message from ${name}`,
      htmlContent: `
        <h3>New contact form message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log("Message ID:", data.body.messageId);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("BREVO ERROR:", error.response?.body || error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
