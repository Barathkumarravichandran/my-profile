import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    // server validation
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "barathkumarravichandran@gmail.com",
        pass: "exigtcfbpbcdkpfs",
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${"barathkumarravichandran@gmail.com"}>`,
      to: "barathkumarravichandran@gmail.com",
      replyTo: email,
      subject: `Contact Form — ${subject}`,
      text: `
Name: ${name}
Email: ${email}

${message}
      `,
    });

    return Response.json({ success: true });

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Mail failed" },
      { status: 500 }
    );
  }
}
