'use client'; // Ensure client-side rendering is enabled

import { useState } from "react";
import { Plan } from "@/types/translations";

export default function PaymentButton({ plan }: { plan: Plan }) {
  const [paying, setPaying] = useState(false); // Track payment processing state
  const [error, setError] = useState<string | null>(null); // Track any errors

  const handlePayment = async () => {
    if (!plan || !plan.price) {
      setError("Plan or price data is missing.");
      return;
    }

    setPaying(true); // Disable button and show loading state

    const paymentData = {
      amount: plan.price,  // Ensure this is a valid number (check if plan.price is undefined)
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

    console.log("Payment Data:", paymentData);  // Log payment data

    try {
      // Send the payment request to your backend API
      const res = await fetch("https://back.easykash.net/api/directpayv1/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
         "Authorization": `Bearer b9u2t4l5ypnmygl7`,
        },
        body: JSON.stringify(paymentData),
      });

      const data = await res.json();
   
      // Log the response from the backend API
      console.log('Response from API:', data);

      if (!res.ok) {
        console.error("Payment creation error:", data);  // Log the error data
        setError(`Failed to create pay link: ${data?.message || 'Unknown error'}`);
      } else {
        const { redirectUrl } = data;
        if (redirectUrl) {
          console.log('Redirecting to payment link:', redirectUrl);  // Log the redirect URL
          window.location.href = redirectUrl;  // Redirect user to EasyKash payment page
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
      {/* Error Message Display */}
      {error && <p className="text-red-500">{error}</p>}

      <button
        onClick={handlePayment}
        className={`w-full mt-4 py-2 rounded-md text-white ${paying ? "opacity-60 cursor-not-allowed" : "bg-mainColor"}`}
        disabled={paying}  // Disable button while payment is processing
      >
        {paying ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
