import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Extract the API key from the Authorization header
  const authorizationHeader = req.headers['authorization'];
  const apiKey = authorizationHeader ? authorizationHeader.split(' ')[1] : null;

  if (!apiKey || apiKey !== process.env.EASYKASH_CASH_API_KEY) {
    return res.status(401).json({ message: 'API Key is missing or invalid' });
  }

  try {
    const {
      amount,
      currency,
      paymentOptions,
      cashExpiry,
      name,
      email,
      mobile,
      customerReference,
      redirectUrl,
      payerEmail,
      payerMobile,
      payerName,
      expiryDuration,
      callbackUrl,  // Add callback URL from the request body
    } = req.body;

    // Send a request to EasyKash to create a direct pay link
    const response = await fetch('https://back.easykash.net/api/directpayv1/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EASYKASH_CASH_API_KEY}`, // Pass API key as Bearer token
      },
      body: JSON.stringify({
        amount,
        currency,
        paymentOptions,
        cashExpiry,
        name,
        email,
        mobile,
        customerReference,
        redirectUrl,
        payerEmail,
        payerMobile,
        payerName,
        expiryDuration,
        callbackUrl,  // Add the callback URL here
      }),
    });

    // Parse the response from EasyKash
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to create payment link', data });
    }

    // Return the response data
    return res.status(200).json(data);
  } catch (error) {
    console.error('EasyKash API error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
