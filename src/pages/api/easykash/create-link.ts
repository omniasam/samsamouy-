// pages/api/easykash/create-link.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Destructure the incoming data from the frontend request body
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

  // Log the incoming data to verify if all required fields are coming through correctly
  console.log("Request Data:", req.body);

  try {
    // Send the request to EasyKash API to create the payment link
    const response = await fetch("https://back.easykash.net/api/directpayv1/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer b9u2t4l5ypnmygl7", // Use your EasyKash API key here securely
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

    const data = await response.json();

    // Check if EasyKash responded with an error
    if (!response.ok) {
      return res.status(400).json({ message: "Failed to create pay link", data });
    }

    // If successful, send the payment link back to the frontend
    res.status(200).json({ redirectUrl: data.paymentLink });
  } catch (err) {
    // If there was an error making the request, log it and return a 500 response
    console.error("Error:", err);
    return res.status(500).json({ message: "Server error", err });
  }
}
