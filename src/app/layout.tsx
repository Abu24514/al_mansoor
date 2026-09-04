import { LanguageProvider } from "@/i18n/config";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
         <Navbar/>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}