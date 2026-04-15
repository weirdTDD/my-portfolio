import { Resend } from "resend";

const DEFAULT_COACH_EMAIL = "edwardmorhe777@gmail.com";
const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  return new Resend(apiKey);
}

function generateMeetLink() {
  const rand = () => Math.random().toString(36).slice(2, 5);
  return `https://meet.google.com/${rand()}-${rand()}-${rand()}`;
}

export async function POST(req) {
  try {
    const { date, slot, userEmail, coachEmail } = await req.json();

    if (!date || !slot || !userEmail) {
      return Response.json(
        { error: "Missing required booking details" },
        { status: 400 },
      );
    }

    const resend = getResendClient();
    const meetLink = generateMeetLink();
    const formattedDate = new Date(date).toDateString();
    const recipientCoachEmail = coachEmail || DEFAULT_COACH_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || DEFAULT_FROM_EMAIL;

    // send to user
    await resend.emails.send({
      from: `Portfolio Booking <${fromEmail}>`,
      replyTo: recipientCoachEmail,
      to: userEmail,
      subject: "Your Session is Confirmed",
      html: `
        <h2>Booking Confirmed for MeetUp with Edward Morhe</h2>
        <p>Date: ${formattedDate}</p>
        <p>Time: ${slot}</p>
        <p><a href="${meetLink}">Join Meeting</a></p>
      `,
    });

    // send to coach
    await resend.emails.send({
      from: `Portfolio Booking <${fromEmail}>`,
      replyTo: userEmail,
      to: recipientCoachEmail,
      subject: "New Booking",
      html: `
        <h2>New Session Booked</h2>
        <p>Date: ${formattedDate}</p>
        <p>Time: ${slot}</p>
      `,
    });

    return Response.json({ meetLink });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: error.message || "Failed to send email" },
      { status: 500 },
    );
  }
}
