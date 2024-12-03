
import "./globals.css";
import NavBar from "./Components/Navbar";
import ContactNav from "./Components/ContactNav";
import Footer from "./Components/Footer";
import { Inter,Lora  } from "next/font/google";



export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-inter",
});

export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  // variable: "--font-lora",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${lora.className}`}>
      <body>
        <div>
          <ContactNav />
          <NavBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
