// src/pages/api/payment.ts

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

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
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    console.log("Sending request to EasyKash API...");

    const response = await fetch("https://back.easykash.net/api/directpayv1/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer b9u2t4l5ypnmygl7`, // API key from environment variables
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

    // Log request and response for better debugging
    const data = await response.json();
    console.log("EasyKash API Response:", data);

    if (!response.ok) {
      return res.status(400).json({ message: "Failed to create pay link", error: data });
    }

    res.status(200).json({ redirectUrl: data.paymentLink });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Server error", err });
  }
}
