import { Resend } from "resend";
import { EmailTemplate } from "@/app/_components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  const response = await req.json();
  
  try {
    const data = await resend.emails.send({
      from: "CloudShare@resend.dev",
      to: ["lakshayandsaini@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
