import { useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Title from "./UI/Title";
import { useLang } from "@/context/LangContext";
import { LandingContent, Plan } from "@/types/translations";

/* ---- Component -------------------------------------------------------- */
export default function PlansSection() {
  const { lang } = useLang();                // "en" | "ar"
  const dir = lang === "ar" ? "rtl" : "ltr";
  const alignText = lang === "ar" ? "text-right" : "text-left";

  const [landingContent, setLandingContent] = useState<LandingContent | null>(null);
  const [paying, setPaying] = useState<string | null>(null); // plan id/title being processed

  /* Fetch landing content – refetch if language changes */
  useEffect(() => {
    fetch("/api/landing-content")
      .then(res => res.json())
      .then((data: LandingContent) => setLandingContent(data));
  }, [lang]);

  /* -------------------------------------------------------------------- */
  const handleEasyKashPay = async (plan: Plan) => {
    try {
      setPaying(typeof plan.title === "string" ? plan.title : plan.title.en);

      // Send the request to your backend (Next.js) instead of EasyKash directly
      const res = await fetch("/api/easykash/create-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 180,
          currency: "EGP",
          name: "Mostafa",
          email: "mostafa@gmail.com",
          mobile: "01011111157",
          customerReference: `plan-${Date.now()}`,
          paymentOptions: [2, 4, 6],
          redirectUrl: "https://samsamouy-hlt8.vercel.app/thank-you",
          expiryDuration: 48,
          VoucherData: "Test Plan Description",
          type: "in",
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Payment creation error:", errorData);
        alert(`Failed to create pay link: ${errorData?.message}`);
        return;
      }

      const { redirectUrl, error } = await res.json();

      if (redirectUrl) {
        window.location.href = redirectUrl; // Redirect the user to the payment page
      } else {
        alert(error ?? "Failed to create pay link");
      }
    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment error – please try again.");
    } finally {
      setPaying(null);
    }
  };

  if (!landingContent) return null;

  /* -------------------------------------------------------------------- */
  return (
    <section id="plans" className="py-10 px-6 md:px-12 bg-gray-50 text-gray-900">
      <div className={`max-w-7xl mx-auto ${alignText}`}>
        <Title
          title={lang === "ar" ? "الباقات المتاحة" : "Choose the Plan That Fits You"}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landingContent?.plans?.map((plan: Plan, idx: number) => (
            <div
              key={idx}
              dir={dir}
              className={`relative border p-6 rounded-xl shadow-lg bg-white flex flex-col justify-between ${
                plan.isPopular ? "border-mainColor ring-2 ring-mainColor" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 text-center">
                  <span className="inline-block bg-mainColor text-white text-xs font-bold py-1 px-3 rounded-full">
                    {lang === "ar" ? "الأكثر شيوعاً" : "Most Popular"}
                  </span>
                </div>
              )}

              {/* Header */}
              <div>
                <h3 className="text-xl font-bold text-mainColor mb-1">
                  {typeof plan.title === "string" ? plan.title : plan.title[lang]}
                </h3>
                <p className="text-sm mb-4 text-gray-700">
                  {typeof plan.description === "string"
                    ? plan.description
                    : plan.description[lang]}
                </p>
                {plan.price && (
                  <p className="text-lg font-semibold text-gray-800 mb-4">
                    EGP {plan.price} / {lang === "ar" ? "شهرياً" : "Monthly"}
                  </p>
                )}

                {/* Feature list */}
                <ul className="text-sm space-y-2 text-gray-700 leading-relaxed">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      {plan.included[i] ? (
                        <AiOutlineCheck className="text-green-600 text-xl mt-1" />
                      ) : (
                        <AiOutlineClose className="text-red-500 text-xl mt-1" />
                      )}
                      <span>{typeof feature === "string" ? feature : feature[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6">
                {plan.tiers?.length ? (
                  plan.tiers.map((tier, i) => (
                    <div key={i} className="border rounded-md p-4 text-sm mb-4">
                      <div className="font-semibold text-mainColor">{tier.label[lang]}</div>
                      {tier.upgrade && <p className="text-gray-600">{tier.upgrade[lang]}</p>}
                      <p className="font-bold mt-1">{tier.price}</p>
                      <button className="mt-2 w-full bg-mainColor text-white py-2 rounded-md">
                        {tier.button[lang]}
                      </button>
                    </div>
                  ))
                ) : (
                  <button
                    disabled={paying !== null}
                    onClick={() => handleEasyKashPay(plan)}
                    className={`w-full mt-4 py-2 rounded-md text-white ${
                      plan.isPopular ? "bg-mainColor text-lg font-bold" : "bg-gray-800"
                    } ${paying ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    {paying
                      ? lang === "ar"
                        ? "جاري التحويل..."
                        : "Processing..."
                      : plan.button?.[lang] ?? (lang === "ar" ? "ابدأ الآن" : "Start Now")}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
