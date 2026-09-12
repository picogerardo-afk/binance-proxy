export default async function handler(req, res) {
  const targetUrl = `https://api.binance.com${req.url}`;

  try {
    const headers = {};
    if (req.headers['x-mbx-apikey']) {
      headers['X-MBX-APIKEY'] = req.headers['x-mbx-apikey'];
    }

    const response = await fetch(targetUrl, {
      method: req.method,
      headers: headers,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
