import "./globals.css";
import { Rajdhani } from "next/font/google";
import { LangProvider } from "@/context/LangContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata = {
  title: "SamSamouy",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rajdhani.variable} scroll-smooth`}>
      <body className="relative">
      <LangProvider>
   
        {children}
           <ToastContainer position="top-right" autoClose={3000} />

        </LangProvider>
      </body>

    </html>
  );
}
