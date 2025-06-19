'use client'; // Ensure client-side rendering is enabled

import { useState } from "react";
import { Plan } from "@/types/translations";

export default function PaymentButton({ plan }: { plan: Plan }) {
  const [paying, setPaying] = useState(false); // Track payment processing state
  const [error, setError] = useState<string | null>(null); // Track any errors

  const handlePayment = async () => {
    // Check if required plan or price data is missing
    if (!plan || !plan.price) {
      setError("Plan or price data is missing.");
      return;
    }

    setPaying(true); // Disable button and show loading state

    const paymentData = {
      amount: plan.price, // Use the plan price dynamically
      currency: "EGP",
      name: "Mostafa",
      email: "mostafa@gmail.com",
      mobile: "01011111157",
      customerReference: `plan-${Date.now()}`,  // Ensure this is a unique identifier
      paymentOptions: [2, 4, 6],  // Ensure this is an array with valid options
      redirectUrl: "https://samsamouy.vercel.app/thank-you",
      expiryDuration: 48,  // This is in hours
      VoucherData: "Test Plan",  // Optional, check if it is required by your API
      type: "in",  // Payment type
    };

    const EASYKASH_API_KEY = `b9u2t4l5ypnmygl7`; // API key for EasyKash

    try {
      // Send the payment request to your backend API
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${EASYKASH_API_KEY}`,  // Add 'Bearer' here for authentication
        },
        body: JSON.stringify(paymentData),  // Send the payment data in the request body
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Payment creation error:", data);  // Log the error data
        setError(`Failed to create pay link: ${data?.message || 'Unknown error'}`);
      } else {
        const { redirectUrl } = data;  // Retrieve redirect URL from the response
        if (redirectUrl) {
          console.log('Redirecting to payment link:', redirectUrl);  // Log the redirect URL
          window.location.href = redirectUrl;  // Redirect the user to the payment page
        } else {
          setError("Failed to generate payment link.");
        }
      }
    } catch (err) {
      console.error('Payment error:', err);  // Log the error in case of a fetch failure
      setError("Payment error – please try again.");
    } finally {
      setPaying(false); // Re-enable the button once the process is done
    }
  };

  return (
    <div>
      {/* Display error message if there is an error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Payment button */}
      <button
        onClick={handlePayment}
        className={`w-full mt-4 py-2 rounded-md text-white ${paying ? "opacity-60 cursor-not-allowed" : "bg-mainColor"}`}
        disabled={paying}  // Disable the button while payment is processing
      >
        {paying ? "Processing..." : "Pay Now"}  {/* Change button text during processing */}
      </button>
    </div>
  );
}
