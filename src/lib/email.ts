import "server-only";

const emailTo = process.env.EMAIL_TO || "breicorp@gmail.com";

export async function sendEmail({ to, subject, text, replyTo }: { to: string | string[]; subject: string; text: string; replyTo?: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) throw new Error("EMAIL_NOT_CONFIGURED");
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, subject, text, reply_to: replyTo }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("EMAIL_DELIVERY_FAILED");
}

export async function sendToBreicorp(subject: string, text: string, replyTo?: string) {
  return sendEmail({ to: emailTo, subject, text, replyTo });
}
