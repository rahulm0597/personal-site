"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z
    .string()
    .email("Enter a valid email address")
    .max(255, "Email is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long (max 5000 characters)"),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
};

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Parse raw FormData — never trust the client
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return {
      status: "error",
      message: "Server configuration error. Please try again later.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    // Use a verified sender domain in production; onboarding@resend.dev works in test mode
    from: process.env.EMAIL_FROM ?? "Contact Form <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO ?? "rahul.maurya0597@gmail.com"],
    replyTo: email,
    subject: `New message from ${name}`,
    html: `
      <table style="font-family:sans-serif;max-width:600px">
        <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
        <tr><td style="padding-top:16px;vertical-align:top"><strong>Message:</strong></td>
            <td style="padding-top:16px">${message.replace(/\n/g, "<br>")}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Failed to send your message. Please try again.",
    };
  }

  return { status: "success" };
}
