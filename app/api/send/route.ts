// re_RDugdJFC_J5F6SLvMBdWN5KVwa7NwwB1B
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["benjamin.leyton@uc.cl"],
        subject: "Nuevo mensaje desde tu sitio web",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "Hola",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}

//re_KjMmNY2k_KwnVeJaBkhFtiG347q1qcTpq