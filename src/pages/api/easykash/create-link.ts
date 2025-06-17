// File: /src/pages/api/easykash/create-link.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
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
    } = req.body;

    const response = await fetch('https://back.easykash.net/api/directpayv1/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         authorization: `Token ${process.env.EASYKASH_CASH_API_KEY}`,

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
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ message: 'Failed to create payment link', data });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('EasyKash API error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
