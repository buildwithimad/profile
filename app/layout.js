import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Imad Khan | Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {/* All theme-dependent UI must be inside the ThemeProvider */}
        <ThemeProvider>
          <ThemeToggle />
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