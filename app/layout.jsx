import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LoginProvider } from "./LoginContext";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono' });

export const metadata = {
  title: "Glam Architecture",
  description: "Abdullah Küçükkılınç",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" className="h-full">
      <body className={`${jetBrainsMono.variable} flex flex-col min-h-screen`}>
        <LoginProvider>
          <Header />
          {children}
          <Footer />
        </LoginProvider>
      </body>
    </html>
  );
}
