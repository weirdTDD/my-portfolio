import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateMeetLink() {
  const rand = () => Math.random().toString(36).slice(2, 5);
  return `https://meet.google.com/${rand()}-${rand()}-${rand()}`;
}

export async function POST(req) {
  try {
    const { date, slot, userEmail, coachEmail } = await req.json();

    const meetLink = generateMeetLink();
    const formattedDate = new Date(date).toDateString();

    // send to user
    await resend.emails.send({
      from: `Edward the Coach ${coachEmail}`,
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
      from: `Booking from Your Client ${userEmail}`,
      to: coachEmail,
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
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
