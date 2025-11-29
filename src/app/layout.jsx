import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "WORKSHOP 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased font-poppins`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
