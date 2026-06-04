import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { validateContactForm } from './lib/validate-contact';

const NOTIFY_TO = 'Info@gladesconstructionltd.com';
const NOTIFY_BCC = ['sharukesh.seker@gmail.com', 'ravinduabeysinghe@gmail.com'];
const FROM = 'Glades Construction <noreply@gladesconstructionltd.com>';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const validation = validateContactForm(req.body);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { firstName, lastName, email, phone, projectType, message } = req.body as {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    projectType?: string;
    message: string;
  };

  const safeFirstName = escapeHtml(firstName.trim());
  const safeLastName = escapeHtml(lastName.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = phone?.trim() ? escapeHtml(phone.trim()) : '';
  const safeProjectType = projectType?.trim() ? escapeHtml(projectType.trim()) : '';
  const safeMessage = escapeHtml(message.trim());

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM,
        to: [NOTIFY_TO],
        bcc: NOTIFY_BCC,
        subject: `New Enquiry from ${firstName.trim()} ${lastName.trim()}`,
        html: `
          <h2 style="font-family:sans-serif;color:#3d352d;">New Website Enquiry</h2>
          <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;">
            <tr>
              <td style="padding:4px 16px 4px 0;font-weight:bold;vertical-align:top;">Name</td>
              <td>${safeFirstName} ${safeLastName}</td>
            </tr>
            <tr>
              <td style="padding:4px 16px 4px 0;font-weight:bold;vertical-align:top;">Email</td>
              <td><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            ${safePhone ? `
            <tr>
              <td style="padding:4px 16px 4px 0;font-weight:bold;vertical-align:top;">Phone</td>
              <td>${safePhone}</td>
            </tr>` : ''}
            ${safeProjectType ? `
            <tr>
              <td style="padding:4px 16px 4px 0;font-weight:bold;vertical-align:top;">Project Type</td>
              <td>${safeProjectType}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:4px 16px 4px 0;font-weight:bold;vertical-align:top;">Message</td>
              <td style="white-space:pre-wrap;">${safeMessage}</td>
            </tr>
          </table>
        `,
      }),
      resend.emails.send({
        from: FROM,
        to: [email.trim()],
        subject: 'Thank you for contacting Glades Construction',
        html: `
          <p style="font-family:sans-serif;font-size:15px;">Dear ${safeFirstName},</p>
          <p style="font-family:sans-serif;font-size:15px;">
            Thank you for reaching out to Glades Construction Ltd. We have received your message
            and will be in touch with you shortly.
          </p>
          <p style="font-family:sans-serif;font-size:15px;">
            Kind regards,<br>
            <strong>Glades Construction Ltd</strong>
          </p>
        `,
      }),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}
