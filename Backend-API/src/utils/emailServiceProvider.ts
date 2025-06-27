import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  subject: string;
  body: string;
  otp: string;
}

export const sendEmail = async ({
  to,
  subject,
  body,
  otp,
}: EmailOptions): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subject}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #ffffff;
          background: linear-gradient(135deg, #0E061C 0%, #1A0D2F 100%);
          margin: 0;
          padding: 0;
        }
        
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background: linear-gradient(135deg, #0E061C 0%, #1A0D2F 50%, #1B1033 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(14, 6, 28, 0.8);
        }
        
        .header {
          background: linear-gradient(135deg, #6C2BD9 0%, #FF61D2 100%);
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .logo {
          font-size: 32px;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        
        .header-subtitle {
          font-size: 16px;
          color: #ffffff;
          opacity: 0.9;
          position: relative;
          z-index: 1;
        }
        
        .content {
          padding: 40px 30px;
          background: rgba(26, 13, 47, 0.6);
          backdrop-filter: blur(10px);
        }
        
        .greeting {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .message {
          font-size: 16px;
          color: #C3B1E1;
          margin-bottom: 30px;
          line-height: 1.8;
          text-align: center;
        }
        
        .otp-section {
          background: linear-gradient(135deg, rgba(108, 43, 217, 0.2) 0%, rgba(255, 97, 210, 0.1) 100%);
          border: 2px solid rgba(108, 43, 217, 0.3);
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          margin: 30px 0;
          position: relative;
          overflow: hidden;
        }
        
        .otp-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, rgba(108, 43, 217, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .otp-label {
          font-size: 14px;
          color: #A55FFF;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        
        .otp-code {
          font-size: 36px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 8px;
          font-family: 'Courier New', monospace;
          text-shadow: 0 0 20px rgba(108, 43, 217, 0.5);
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        
        .otp-note {
          font-size: 14px;
          color: #D1C5F0;
          position: relative;
          z-index: 1;
        }
        
        .security-note {
          background: rgba(255, 167, 38, 0.1);
          border: 1px solid rgba(255, 167, 38, 0.3);
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
        }
        
        .security-note h3 {
          color: #FFA726;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
        }
        
        .security-note p {
          color: #D1C5F0;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .footer {
          background: rgba(14, 6, 28, 0.8);
          padding: 30px;
          text-align: center;
          border-top: 1px solid rgba(108, 43, 217, 0.2);
        }
        
        .footer-text {
          color: #C3B1E1;
          font-size: 14px;
          margin-bottom: 15px;
        }
        
        .footer-links {
          margin-top: 20px;
        }
        
        .footer-link {
          color: #A55FFF;
          text-decoration: none;
          font-size: 14px;
          margin: 0 15px;
          font-weight: 500;
        }
        
        .footer-link:hover {
          color: #FF61D2;
        }
        
        .social-links {
          margin-top: 20px;
        }
        
        .social-link {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6C2BD9 0%, #A55FFF 100%);
          border-radius: 50%;
          margin: 0 8px;
          text-decoration: none;
          color: white;
          font-weight: bold;
          line-height: 40px;
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        .social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(108, 43, 217, 0.4);
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(108, 43, 217, 0.5) 50%, transparent 100%);
          margin: 30px 0;
        }
        
        @media (max-width: 600px) {
          .email-container {
            margin: 0;
            border-radius: 0;
          }
          
          .header, .content, .footer {
            padding: 30px 20px;
          }
          
          .otp-code {
            font-size: 28px;
            letter-spacing: 4px;
          }
          
          .logo {
            font-size: 28px;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <!-- Header -->
        <div class="header">
          <div class="logo">🎮 FLIPSTER</div>
          <div class="header-subtitle">Your Gaming Marketplace</div>
        </div>
        
        <!-- Content -->
        <div class="content">
          <h1 class="greeting">${subject}</h1>
          <p class="message">${body}</p>
          
          <!-- OTP Section -->
          <div class="otp-section">
            <div class="otp-label">Your Verification Code</div>
            <div class="otp-code">${otp}</div>
            <div class="otp-note">This code expires in 10 minutes</div>
          </div>
          
          <!-- Security Note -->
          <div class="security-note">
            <h3>🔒 Security Notice</h3>
            <p>Never share this code with anyone. Flipster will never ask for your verification code via phone or email. If you didn't request this code, please ignore this email and consider changing your password.</p>
          </div>
          
          <div class="divider"></div>
          
          <p style="color: #C3B1E1; font-size: 14px; text-align: center; margin-bottom: 0;">
            Having trouble? Contact our support team at 
            <a href="mailto:support@flipster.com" style="color: #A55FFF; text-decoration: none;">support@flipster.com</a>
          </p>
        </div>
        
        <!-- Footer -->
        <div class="footer">
          <p class="footer-text">Thank you for choosing Flipster!</p>
          <p class="footer-text">The ultimate destination for gaming enthusiasts.</p>
          
          <div class="footer-links">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Service</a>
            <a href="#" class="footer-link">Help Center</a>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">f</a>
            <a href="#" class="social-link">t</a>
            <a href="#" class="social-link">i</a>
            <a href="#" class="social-link">d</a>
          </div>
          
          <p style="color: #8B5CF6; font-size: 12px; margin-top: 20px;">
            © 2024 Flipster. All rights reserved.<br>
            This email was sent to ${to}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: '"Flipster Gaming" <no-reply@flipster.com>',
    to,
    subject: `🎮 ${subject}`,
    html,
  });

  console.log(`✅ Professional email sent to ${to}`);
};
