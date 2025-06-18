// File: src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CustomInput } from "@/components/admin/UI/CustomInput";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

const handleLogin = async () => {
  setLoading(true);
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password }),
  });
  setLoading(false);

  if (res.ok) {
    router.push("/admin/dashboard");
  } else {
    alert("Wrong name or password");
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <div className="space-y-4">
          <CustomInput
            type="text"
            placeholder="Enter Admin Name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="relative">
            <CustomInput
              type={showPassword ? "text" : "password"}
              placeholder="Enter Admin Password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-800"
            >
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </button>
          </div>

        <button
  onClick={handleLogin}
  disabled={loading}
  className="w-full bg-mainColor text-white py-2 rounded-md hover:bg-orange-600 transition flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <FaSpinner className="animate-spin" />
      <span>Logging in...</span>
    </>
  ) : (
    "Login"
  )}
</button>

        </div>
      </div>
    </div>
  );
}
