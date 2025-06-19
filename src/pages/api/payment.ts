import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    // If the method is not POST, return 405 (Method Not Allowed)
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Extract the payment data from the request body
  const {
    amount,
    currency,
    name,
    email,
    mobile,
    customerReference,
    paymentOptions,
    redirectUrl,
    expiryDuration,
    VoucherData,
    type,
  } = req.body;

  // Validate incoming data
  if (!amount || !currency || !name || !email || !mobile) {
    // If any required fields are missing, return 400 (Bad Request)
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Fetch the API key from environment variables securely
    const EASYKASH_API_KEY = process.env.EASYKASH_API_KEY;

    // Send the payment data to EasyKash API
    const response = await fetch("https://back.easykash.net/api/directpayv1/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${EASYKASH_API_KEY}`,  // Use the 'Bearer' token for authorization
      },
      body: JSON.stringify({
        amount,
        currency,
        name,
        email,
        mobile,
        customerReference,
        paymentOptions,
        redirectUrl,
        expiryDuration,
        VoucherData,
        type,
      }),
    });

    // Parse the response from EasyKash API
    const data = await response.json();

    // If the response is not OK, return an error message
    if (!response.ok) {
      return res.status(400).json({ message: "Failed to create pay link", error: data });
    }

    // Return the payment link to the frontend
    res.status(200).json({ redirectUrl: data.paymentLink });
  } catch (err) {
    // Handle any errors and return a server error status
    return res.status(500).json({ message: "Server error", err });
  }
}
