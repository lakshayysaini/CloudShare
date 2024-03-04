import { Resend } from "resend";
import { EmailTemplate } from "../../_components/email-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  const response = await req.json();
  console.log("response", response);
  try {
    const data = await resend.emails.send({
      from: "CloudShare@resend.dev",
      to: "lakshayandsaini@gmail.com",
      subject: response?.userName + " shared file with you",
      react: EmailTemplate({ response }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
