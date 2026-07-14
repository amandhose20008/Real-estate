import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ─── Types ──────────────────────────────────────────────────────────────────
interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  type: string;
  budget?: string;
  location?: string;
  message?: string;
  source?: string; // which page / section triggered the enquiry
}

// ─── Mailer setup ────────────────────────────────────────────────────────────
function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,   // your Gmail address used to SEND
      pass: process.env.SMTP_PASS,   // Gmail App Password (16 chars, no spaces)
    },
  });
}

// ─── HTML email template ─────────────────────────────────────────────────────
function buildOwnerEmail(data: EnquiryPayload): string {
  const row = (label: string, value?: string) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#0F172A;background:#f8f6f0;white-space:nowrap;border-bottom:1px solid #e5e7eb;">${label}</td>
          <td style="padding:8px 12px;color:#374151;border-bottom:1px solid #e5e7eb;">${value}</td>
        </tr>`
      : '';

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr><td>
      <table width="600" align="center" cellpadding="0" cellspacing="0"
             style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#0F172A;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#D4AF37;font-size:24px;letter-spacing:1px;">Classic Realty Indore</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">New Property Enquiry Received</p>
          </td>
        </tr>

        <!-- Alert banner -->
        <tr>
          <td style="background:#D4AF37;padding:12px 40px;text-align:center;">
            <p style="margin:0;color:#0F172A;font-weight:700;font-size:14px;">🔔 A new lead just came in! Respond within 2 hours.</p>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:32px 40px;">
            <h2 style="margin:0 0 20px;color:#0F172A;font-size:18px;">Enquiry Details</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
              ${row('👤 Name', data.name)}
              ${row('📞 Phone', data.phone)}
              ${row('📧 Email', data.email || 'Not provided')}
              ${row('🏢 Property Type', data.type)}
              ${row('📍 Preferred Location', data.location)}
              ${row('💰 Budget', data.budget)}
              ${row('📝 Requirements', data.message)}
              ${row('🌐 Source', data.source || 'Contact Page')}
              ${row('🕒 Received At', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' }))}
            </table>
          </td>
        </tr>

        <!-- CTA buttons -->
        <tr>
          <td style="padding:0 40px 32px;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                ${data.phone ? `<td style="padding-right:12px;">
                  <a href="tel:${data.phone.replace(/\s/g, '')}"
                     style="display:inline-block;background:#0F172A;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;">
                    📞 Call Now
                  </a>
                </td>` : ''}
                ${data.phone ? `<td style="padding-right:12px;">
                  <a href="https://wa.me/91${data.phone.replace(/\D/g,'').slice(-10)}"
                     style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;">
                    💬 WhatsApp
                  </a>
                </td>` : ''}
                ${data.email ? `<td>
                  <a href="mailto:${data.email}"
                     style="display:inline-block;background:#D4AF37;color:#0F172A;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;">
                    ✉️ Reply via Email
                  </a>
                </td>` : ''}
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8f6f0;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">
              Classic Realty Indore · Vijay Nagar, Indore, MP 452010<br/>
              This email was auto-generated from your website enquiry form.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// Auto-reply template sent to the enquirer
function buildAutoReply(data: EnquiryPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 20px;">
    <tr><td>
      <table width="600" align="center" cellpadding="0" cellspacing="0"
             style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);max-width:100%;">
        <tr>
          <td style="background:#0F172A;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#D4AF37;font-size:24px;letter-spacing:1px;">Classic Realty Indore</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <h2 style="margin:0 0 16px;color:#0F172A;">Thank you, ${data.name}! 🙏</h2>
            <p style="color:#374151;line-height:1.7;margin:0 0 16px;">
              We have received your enquiry for <strong>${data.type}</strong> and our expert team will reach out to you within <strong>2 hours</strong> on <strong>${data.phone}</strong>.
            </p>
            <p style="color:#374151;line-height:1.7;margin:0 0 32px;">
              In the meantime, feel free to browse our latest listings or connect with us directly.
            </p>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-right:12px;">
                  <a href="tel:+919179905115"
                     style="display:inline-block;background:#0F172A;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;">
                    📞 +91 91799 05115
                  </a>
                </td>
                <td>
                  <a href="https://wa.me/919179905115"
                     style="display:inline-block;background:#25D366;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:700;font-size:14px;">
                    💬 WhatsApp Us
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f8f6f0;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">
              Classic Realty Indore · Vijay Nagar, Indore, MP 452010<br/>
              © ${new Date().getFullYear()} Classic Realty Indore. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: EnquiryPayload = await req.json();

    // Basic validation
    const { name, phone, type } = body;
    if (!name?.trim() || !phone?.trim() || !type?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Name, phone and property type are required.' },
        { status: 400 }
      );
    }

    // Phone number basic validation (10 digits)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid 10-digit phone number.' },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured. Check .env.local');
      return NextResponse.json(
        { success: false, message: 'Email service not configured. Please contact us directly.' },
        { status: 503 }
      );
    }

    const transporter = createTransporter();
    const ownerEmail = process.env.OWNER_EMAIL || 'Lokeshkoushalindore@gmail.com';

    // Email to owner
    await transporter.sendMail({
      from: `"Classic Realty Indore — Website" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: `🏢 New Enquiry: ${type} — ${name} (${phone})`,
      html: buildOwnerEmail(body),
      replyTo: body.email || undefined,
    });

    // Auto-reply to enquirer (only if email is provided)
    if (body.email?.trim()) {
      await transporter.sendMail({
        from: `"Classic Realty Indore" <${process.env.SMTP_USER}>`,
        to: body.email.trim(),
        subject: `We received your enquiry — Classic Realty Indore`,
        html: buildAutoReply(body),
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully! We will contact you within 2 hours.',
    });
  } catch (error) {
    console.error('[Enquiry API] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}

// ─── GET handler — health check ───────────────────────────────────────────────
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    endpoint: '/api/enquiry',
    method: 'POST',
    requiredFields: ['name', 'phone', 'type'],
    optionalFields: ['email', 'budget', 'location', 'message', 'source'],
  });
}
