import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* All theme-dependent UI must be inside the ThemeProvider */}
        <GoogleAnalytics />
        <ThemeProvider>
          <Navbar />
          <BackToTop />
          
          <SmoothScroll>
            {children}
          </SmoothScroll>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}