
import "./globals.css";
import NavBar from "./Components/Navbar";
import ContactNav from "./Components/ContactNav";
import Footer from "./Components/Footer";
import { Lexend,Castoro  } from "next/font/google";



export const inter = Lexend({
  subsets: ["latin"],
  display: "swap",    
  weight: ["300"],  
});

export const lora = Castoro({
  subsets: ["latin"],          
  display: "swap",   
  weight: ["400"],  
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
          <div className="hidden md:block">
          <ContactNav />
          </div>
          <div>
          <NavBar />
          </div>
        </div>
        <div className="">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
